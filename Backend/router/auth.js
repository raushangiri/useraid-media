const express = require("express");
const router = express.Router();
require("../db/connection");
const User = require("../modal/registrationSchema");
const Dipositinfo = require("../modal/dipositSchema");
const paymentinfo = require("../modal/paymentReqSchema");
const taskdata = require("../modal/taskSchema");
const completedtaskdata = require("../modal/completedtaskSchema");
const assignedtask = require("../modal/assignedtaskSchema");
const TaskhistorySchema = require("../modal/taskhistorySchema");
const SupporthistorySchema = require("../modal/supporthistorySchema");
const mongoose = require("mongoose");
const cron = require("node-cron");
const authentication = require("../middleware/authentication");
const withdrawrequest = require("../modal/withdrawSchema");
/////////////////////////////////////////////////Withdraw GET api//////////////////////////////////////////

router.get("/withdraw-request/:customer_id", async (req, res) => {
  const customer_id = req.params.customer_id;
  const customer_id_int = parseInt(customer_id);
  try {
    const withdraws = await withdrawrequest.find({
      customer_id: customer_id_int,
    });
    res.status(200).json(withdraws);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/////////////////////////////////////////////////Withdraw POST api//////////////////////////////////////////

router.post("/withdraw-request/:customer_id", async (req, res) => {
  const customer_id = req.params.customer_id;
  const customer_id_int = parseInt(customer_id);
  const { requestType, qr_code_screenshot, amount } = req.body;
  const count = await User.countDocuments({ referrel_id: customer_id_int });

  if (!amount) {
    return res.status(404).json({ error: "Missing required fields" });
  }
  if (requestType === "taskwallet") {
    if (amount < 200) {
      return res.status(402).json({ error: "You can request minimum 200" });
    }
    if (count < 2) {
      return res
        .status(402)
        .json({ error: "You need to refer 2 member to get task withdraw" });
    }
  }
  if (requestType === "referrelwallet") {
    if (amount < 100) {
      return res.status(402).json({ error: "You can request minimum 100" });
    }
    if (amount % 100 !== 0) {
      return res
        .status(403)
        .json({ error: "Amount should be in multiple of 100" });
    }
  }

  try {
    let wallet_balance;
    if (requestType === "referrelwallet") {
      const user = await User.findOne({ customer_id: customer_id_int });
      wallet_balance = user.referrelwallet;
    } else if (requestType === "taskwallet") {
      const user = await User.findOne({ customer_id: customer_id_int });
      wallet_balance = user.taskwallet;
    }
    if (wallet_balance >= amount) {
      const withdraw = new withdrawrequest({
        customer_id: customer_id_int,
        requestType,
        qr_code_screenshot,
        amount,
      });
      const result = await withdraw.save();
      res.status(201).json(result);
    } else {
      res.status(400).json({ error: "Insufficient balance" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

//////////////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>///////////////////////////////////////////
router.post("/registration2", async (req, res) => {
  const {
    referrel_id,
    name,
    email_id,
    contact_number,
    password,
    account_status,
    pan_number,
    qr_code_screenshot,
  } = req.body;

  // Regular expressions for phone number and PAN number
  const phoneRegex = /^\d{10}$/;
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

  let today = new Date();
  let date =
    today.getDate() +
    "-" +
    parseInt(today.getMonth() + 1) +
    "-" +
    today.getFullYear();
  if (!name || !contact_number || !password || !pan_number) {
    // return res.status(422).json({ error: "please fill all required field" });
    return res.status(422).json({
      message: "please fill all required field",
    });
  }
  // Validate phone number and PAN number format
  if (!phoneRegex.test(contact_number)) {
    return res.status(409).json({ error: "Invalid phone number" });
  }
  if (!panRegex.test(pan_number)) {
    return res.status(410).json({ error: "Invalid PAN number" });
  }
  try {
    let updatedunitNo;
    User.find()
      .sort({ customer_id: -1 })
      .limit(1)
      .then(async (data) => {
        updatedunitNo = data[0].customer_id + 1;

        const user = new User({
          customer_id: updatedunitNo,
          referrel_id,
          name,
          email_id,
          contact_number,
          password,
          account_status,
          pan_number,
          qr_code_screenshot,
        });

        // hash method
        await user.save();
        res.status(201).json({
          message: "User registered successfully",
          customer_id: updatedunitNo,
        });
      });
  } catch (error) {
    console.log(error);
  }
});


/////////////////////////////////////////Auto assign task to active customer///////////////////////////////////////////////////
const assignTasksToCustomers = async () => {
  try {
    // Fetch all customer IDs from the User collection
    const customers = await User.find(
      { account_status: "Active" },
      "customer_id"
    );
    const customerIds = customers.map((customer) => customer.customer_id);
    // Assign 10 random tasks from the taskdata collection to each customer
    const assignedTasks = await Promise.all(
      customerIds.map(async (customerId) => {
        try {
          const tasks = await taskdata.aggregate([{ $sample: { size: 10 } }]);
          // Add the customer ID to each task object
          const assignedTasks = tasks.map(async (task) => {
            return {
              customer_id: customerId,
              videoUrl: task.videoUrl,
              video_id: task.video_id,
            };
          });
          return await Promise.all(assignedTasks);
        } catch (err) {
          console.error(err);
        }
      })
    );
    // Flatten the array of assigned tasks
    const flattenedAssignedTasks = assignedTasks.flat();
    // Save the assigned tasks to the assignedtask collection
    await assignedtask.insertMany(flattenedAssignedTasks);
    console.log("Tasks assigned successfully");
  } catch (err) {
    console.error(err);
  }
};
cron.schedule("37 19 * * *", assignTasksToCustomers, {
  timezone: "Asia/Kolkata",
});
///////////////////Update taskhistory api for task status pending///////////////////////
const updatetaskhistory = async () => {
  console.log("History updated");
  const assignedTasks = await assignedtask.find({ status: "Pending" }).exec();
  const uniqueCustomerIDs = [
    ...new Set(assignedTasks.map((task) => task.customer_id)),
  ];

  const tasksToInsert = uniqueCustomerIDs.map((customerID) => ({
    customer_id: customerID,
    status: assignedTasks
      .filter((task) => task.customer_id === customerID)
      .every((task) => task.status === "Completed")
      ? "Completed"
      : "Pending",
  }));

  await TaskhistorySchema.insertMany(tasksToInsert);
  console.log("Tasks History Updated successfully");
};
cron.schedule("48 23 * * *", updatetaskhistory, {
  timezone: "Asia/Kolkata",
});
//////////////////////////////////////Auto delete api/////////////////////

const clearLogs = async () => {
  try {
    await assignedtask.deleteMany(); // clear the logs collection
    console.log("assigned task collection cleared");
  } catch (err) {
    console.error(err);
  }
};

// Schedule the function to be called every day at 7:10 AM
cron.schedule("48 23 * * *", clearLogs, {
  timezone: "Asia/Kolkata",
});

/////////////////Get Active and inctive user and total referred user//////////////////
router.get("/referred-users/:customer_id", async (req, res) => {
  try {
    const customer_id = req.params.customer_id;
    const customer_id_int = parseInt(customer_id);
    const referrals = await User.find({ referrel_id: customer_id_int }).exec();

    // Map the referrals to an array of referred users with their status
    const referredUsers = referrals.map((referral) => ({
      customer_id: referral.customer_id,
      account_status: referral.account_status,
    }));
    const activeCount = referredUsers.filter(
      (user) => user.account_status === "Active"
    ).length;
    const pendingCount = referredUsers.filter(
      (user) => user.account_status === "Inactive"
    ).length;
    const totalCount = referredUsers.length;

    res.status(200).json({ activeCount, pendingCount, totalCount });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching referred users");
  }
});

/////////////////////////////////////////////taskcompleted with wallat update/////////////////////////////////////
router.put("/taskcomplete/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    // Update the status of the task to "completed"
    let updatedTask = await assignedtask.findByIdAndUpdate(
      taskId,
      { status: "Completed" },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    // Retrieve the customer ID associated with the completed task
    const customerId = updatedTask.customer_id;
    // Query the assignedtask collection to find all tasks assigned to the customer
    const assignedTasks = await assignedtask.find({
      customer_id: customerId,
    });
    // Check if all assigned tasks are completed
    const allTasksCompleted = assignedTasks.every(
      (task) => task.status === "Completed"
    );
    if (allTasksCompleted) {
      // If all tasks are completed, update the user's task wallet
      const updatedUser = await User.findOneAndUpdate(
        { customer_id: customerId },
        { $inc: { taskwallet: 40, Totalwallet: 40 } },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
    }
    return res.status(200).json("Task completed successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

//////////////////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>////////////////////////////////////////
router.post("/task-historyy", async (req, res) => {
  const assignedTasks = await assignedtask.find().exec();
  const uniqueCustomerIDs = [
    ...new Set(assignedTasks.map((task) => task.customer_id)),
  ];

  const tasksToInsert = uniqueCustomerIDs.map((customerID) => ({
    customer_id: customerID,
    status: assignedTasks
      .filter((task) => task.customer_id === customerID)
      .every((task) => task.status === "Completed")
      ? "Completed"
      : "Pending",
  }));

  await TaskhistorySchema.insertMany(tasksToInsert);
  res.sendStatus(201);
});

/////////////Get task history with customer_id//////////////////////
router.get("/gettaskhistory/:customer_id", async (req, res) => {
  try {
    const customer_id = req.params.customer_id;
    const customer_id_int = parseInt(customer_id);
    const task = await TaskhistorySchema.find({ customer_id: customer_id_int });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

////////////////////////////////////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>/////////////////////////////
router.get("/gettasks/:customer_id", async (req, res) => {
  try {
    const customer_id = req.params.customer_id;
    const customer_id_int = parseInt(customer_id);
    const task = await assignedtask.find({ customer_id: customer_id_int });

    res.status(200).json(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

///////////////////Update wallet//////////////////////

router.put("/updatewallet/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { referrelwallet } = req.body;
    let updatedUser = await User.findByIdAndUpdate(
      id,
      { referrelwallet },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // Update Totalwallet field
    updatedUser.Totalwallet =
      updatedUser.taskwallet + updatedUser.referrelwallet;
    await updatedUser.save();
    return res.status(200).json({ updatedUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

///////////////update completed task api///////////////
router.post("/completed-task", async (req, res) => {
  const { customer_id, video_id, videoUrl } = req.body;
  try {
    const completedtask = new completedtaskdata({
      customer_id,
      video_id,
      videoUrl,
    });
    await completedtask.save();
    res.status(200).json({ message: "Completed task uploaded successfully" });
  } catch (error) {
    console.log(error);
  }
});

///////////////update assigned task api///////////////
router.post("/assigned-task", async (req, res) => {
  const { customer_id, video_id, videoUrl } = req.body;
  try {
    const Assignedtask = new assignedtask({
      customer_id,
      video_id,
      videoUrl,
    });
    await Assignedtask.save();
    res.status(200).json({ message: "Task assigned successfully" });
  } catch (error) {
    console.log(error);
  }
});

///////////////////////////////Support Hitory get api//////////////////

router.get("/supportHistory/:customer_id", async (req, res) => {
  const customer_id = parseInt(req.params.customer_id);
  await SupporthistorySchema.find({ customer_id })
    .then((result) => {
      res.status(200).json({
        supporthistory: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});
/////////////////////////////support history Api/////////////////////////

router.post("/supportHistory", async (req, res) => {
  const { customer_id, Subject, status, reply } = req.body;
  try {
    const resolvedsupport = new SupporthistorySchema({
      customer_id,
      Subject,
      status,
      reply,
    });
    await resolvedsupport.save();
    res.status(200).json({ message: "Enqury resolved" });
  } catch (error) {
    console.log(error);
  }
});

////////////////////task completed update,check all task completed,then remove from assign task then create task history/////////

router.put("/taskcompletedhistory/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    // Update the status of the task to "completed"
    let updatedTask = await assignedtask.findByIdAndUpdate(
      taskId,
      { status: "Completed" },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    // Retrieve the customer ID associated with the completed task
    const customerId = updatedTask.customer_id;
    // Query the assignedtask collection to find all tasks assigned to the customer
    const assignedTasks = await assignedtask.find({
      customer_id: customerId,
    });
    // Check if all assigned tasks are completed
    const allTasksCompleted = assignedTasks.every(
      (task) => task.status === "Completed"
    );
    if (allTasksCompleted) {
      // If all tasks are completed, update the user's task wallet and total wallet
      const updatedUser = await User.findOneAndUpdate(
        { customer_id: customerId },
        { $inc: { taskwallet: 40, Totalwallet: 40 } },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      // Delete all completed tasks from assignedtask collection
      await assignedtask.deleteMany({
        customer_id: customerId,
        status: "Completed",
      });
      // Create a new record in taskhistory collection
      const taskHistory = new TaskhistorySchema({
        customer_id: customerId,
        status: "Completed",
        date: Date.now(),
      });
      await taskHistory.save();
    }
    return res.status(200).json("Task completed successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

/////////////////////////////////Task completed api//////////////////////////////////

router.put("/taskcompleted/:id", async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  const newuser = {};

  if (status) {
    newuser.status = status;
  }
  let updatedstatus = await assignedtask.findById(
    mongoose.Types.ObjectId(req.params.id)
  );
  console.log(updatedstatus, "updatedstatus");

  if (!updatedstatus) {
    return res.status(400).send("status not found");
  }
  updatedstatus = await assignedtask.findByIdAndUpdate(
    req.params.id,
    { $set: newuser },
    { new: true }
  );
  res.json({ newuser });
});

/////////////////////////////////Get Uploaded task//////////////////////////////////
router.get("/tasks", async (req, res) => {
  try {
    const task = await taskdata.aggregate([{ $sample: { size: 10 } }]);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

////////////////////////////////////Diposit api//////////////////////////////////////

router.post("/diposit", async (req, res) => {
  const { customer_id, transaction_id, account_status, qr_code_screenshot } =
    req.body;
  if (!transaction_id) {
    return res.status(422).json({ error: "Please enter transaction ID" });
  }
  try {
    const diposit = new Dipositinfo({
      customer_id,
      transaction_id,
      account_status,
      qr_code_screenshot,
    });
    await diposit.save();
    res.status(200).json({ message: "Payment details uploaded successfully" });
  } catch (error) {
    console.log(error);
  }
});

////////////////////////////////////Diposit History/////////////////////////////////////////////

router.get("/diposithistory/:customer_id", async (req, res) => {
  const customer_id = parseInt(req.params.customer_id);
  await Dipositinfo.find({ customer_id })
    .then((result) => {
      res.status(200).json({
        diposithistory: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

////////////////////////////////////////////////Payment API///////////////////////////////////
router.post("/payment", async (req, res) => {
  const { customer_id, transaction_id, amount } = req.body;
  if (!transaction_id || !amount) {
    return res.status(422).json({ error: "Please enter Required information" });
  }
  try {
    const payment = new paymentinfo({
      customer_id,
      transaction_id,
      amount,
    });
    await payment.save();
    res.status(201).json({ message: "Payment details uploaded successfully" });
  } catch (error) {
    console.log(error);
  }
});

/////////////////////Update User QR code in customer_master/////////////////////
router.put("/Userqrcode/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { qr_code_screenshot } = req.body;
    let updatedUser = await User.findByIdAndUpdate(
      id,
      { qr_code_screenshot },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // Update account_status field
    await updatedUser.save();
    return res.status(200).json("QR code to uploaded");
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

//////////////////////////////////////////Registration Api/////////////////////////////////////
router.post("/registration", async (req, res) => {
  const {
    referrel_id,
    name,
    email_id,
    contact_number,
    password,
    account_status,
    pan_number,
    qr_code_screenshot,
  } = req.body;

  let today = new Date();
  let date =
    today.getDate() +
    "-" +
    parseInt(today.getMonth() + 1) +
    "-" +
    today.getFullYear();

  if (!name || !contact_number || !password || !pan_number) {
    return res.status(422).json({ error: "please fill all required field" });
  }
  const userlogin = await User.findOne({
    contact_number: contact_number,
  });
  if (userlogin) {
    return res.status(402).json({ error: "User Already Registered" });
  }
  try {
    let updatedunitNo;
    User.find()
      .sort({ customer_id: -1 })
      .limit(1)
      .then(async (data) => {
        updatedunitNo = data[0].customer_id + 1;

        const user = new User({
          customer_id: updatedunitNo,
          referrel_id,
          name,
          email_id,
          contact_number,
          password,
          account_status,
          pan_number,
          qr_code_screenshot,
        });

        // hash method
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
      });
  } catch (error) {
    console.log(error);
  }
});

///////////////////Login Api/////////////////////////////
router.post("/login2", async (req, res) => {
  const { customer_id, password } = req.body;
  if (!customer_id || !password) {
    return res.status(401).json({ error: "please fill all required field" });
  }
  const user = await User.findOne({ customer_id });
  if (!user) {
    return res.status(422).json({ error: "User Not Registered" });
  }
  const isMatch = password === user.password;
  if (!isMatch) {
    return res.status(422).json({ error: "Invalid Credentialssss" });
  }
  const token = await user.generateAuthToken();
  res.cookie("jwtoken", token, { httpOnly: true });
  res.status(200).json({ message: "Logged in successfully", jwtToken: token });
});

///////////////////////////Get Durect referrel /////////////////////////////////////////////////////

router.get("/directReferrel/:customer_id", async (req, res) => {
  const customer_id = req.params.customer_id;
  const id = parseInt(customer_id);
  await User.find({ referrel_id: id })
    .then((result) => {
      res.status(200).json({
        level1user: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

////////////////////////////////////////////////// referrel Level 1 api//////////////////////////////

router.get("/Referrellevel1/:customerIds", async (req, res) => {
  try {
    const customerIds = req.params.customerIds;
    const referrals = await User.find({
      referrel_id: { $in: customerIds },
    }).lean();
    const referredCustomerIds = referrals.map(
      (referral) => referral.customer_id
    );
    res.status(200).json({ referredCustomerIds });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

////////////////////////////////////////////////// referrel Level 2 api//////////////////////////////

router.get("/Referrellevel2/:customerIds", async (req, res) => {
  try {
    const customerIds = req.params.customerIds.split(",");
    const referrals = await User.find({
      referrel_id: { $in: customerIds },
    }).lean();
    const referredCustomerIds = referrals.map(
      (referral) => referral.customer_id
    );
    res.status(200).json({ referredCustomerIds });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

//////////////////////////////////////////////////Level referrel api//////////////////////////////

router.get("/level1ref/:customerIds", async (req, res) => {
  try {
    const customerIds = req.params.customerIds.split(",");
    const referrals = await User.find({
      referrel_id: { $in: customerIds },
    }).lean();
    const referredCustomerIds = referrals.map((referral) => referral);
    res.status(200).json({ referredCustomerIds });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//////////////////////////////////////////////////Levels referrel api//////////////////////////////

router.get("/level2ref", async (req, res) => {
  const { myList } = req.query;
  const parsedList = JSON.parse(myList);
  await User.find({ where: { customer_id: parsedList } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});

//////////////////////////////////////////////////Page Authentication//////////////////////////////
//////Dashbord authentication///////////
router.get("/dashboard", authentication, (req, res) => {
  res.send(req.rootUser);
});
//////Profile authentication///////////
router.get("/profile", authentication, (req, res) => {
  res.send(req.rootUser);
});

//////direct-team authentication///////////
router.get("/direct-team", authentication, (req, res) => {
  res.send(req.rootUser);
});
//////level-team authentication///////////
router.get("/level-team", authentication, (req, res) => {
  res.send(req.rootUser);
});

//////view-task authentication///////////
router.get("/view-task", authentication, (req, res) => {
  res.send(req.rootUser);
});

//////task history authentication///////////
router.get("/task-history", authentication, (req, res) => {
  res.send(req.rootUser);
});

//////dipositpay authentication///////////
router.get("/dipositpay", authentication, (req, res) => {
  res.send(req.rootUser);
});

//////diposithistory authentication///////////
router.get("/diposithistory", authentication, (req, res) => {
  res.send(req.rootUser);
});

//////HelpSupport authentication///////////
router.get("/contactus", authentication, (req, res) => {
  res.send(req.rootUser);
});

//////supportHistory authentication///////////
router.get("/supporthistory", authentication, (req, res) => {
  res.send(req.rootUser);
});

//////direct withdraw authentication///////////
router.get("/direct-withdraw", authentication, (req, res) => {
  res.send(req.rootUser);
});

//////ads withdraw authentication///////////
router.get("/ads-withdraw", authentication, (req, res) => {
  res.send(req.rootUser);
});

//////withdraw history authentication///////////
router.get("/withdraw-history", authentication, (req, res) => {
  res.send(req.rootUser);
});

//////refer authentication///////////
router.get("/refer", authentication, (req, res) => {
  res.send(req.rootUser);
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logged Out");
});

///////////////////////////////////Admin api////////////////////////////
/////////////////////Activate User/////////////////////

//////////////////Activate user and update with 10 task///////////////

router.put("/activeUserwithtask/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { account_status } = req.body;
    let updatedUser = await User.findByIdAndUpdate(
      id,
      { account_status },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // Update account_status field
    await updatedUser.save();
    // Assign 10 tasks to the user
    const customerId = updatedUser.customer_id;
    const referrer = updatedUser.referrel_id;
    const tasks = await taskdata.aggregate([{ $sample: { size: 10 } }]);
    const assignedTasks = tasks.map((task) => {
      return {
        customer_id: customerId,
        videoUrl: task.videoUrl,
        video_id: task.video_id,
      };
    });
    // Save the assigned tasks to the AssignedTask collection
    await assignedtask.insertMany(assignedTasks);
    const referringUser = await User.findOne({ customer_id: referrer });
    if (referringUser) {
      const updatedReferralUser = await User.findByIdAndUpdate(
        referringUser._id,
        { $inc: { referrelwallet: 50, Totalwallet: 50 } },
        { new: true }
      );
    }
    res.status(200).send("User activated and tasks assigned successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
