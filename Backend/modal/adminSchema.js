const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  customer_id: { type: String, default: "AM0001001" },
  name: { type: String, required: true },
  email_id: { type: String, required: false },
  password: { type: String, required: true },
  qr_code_screenshot: {
    default: "",
    type: String,
  },
  taskwithdraw: {
    type: Number,
    default: 0,
  },
  referrelwithdraw: {
    type: Number,
    default: 0,
  },
  Totalreceivedpayment: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

adminSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    if (!this.tokens) {
      this.tokens = [];
    }

    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const AdminSchema = mongoose.model("adminMaster", adminSchema);

module.exports = AdminSchema;
