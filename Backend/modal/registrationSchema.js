const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registrationSchema = new mongoose.Schema({
  customer_id: {},
  referrel_id: {
    type: Number,
    default: 1001,
  },
  name: { type: String, required: true },
  email_id: { type: String, required: false },
  contact_number: { type: Number, required: true },
  password: { type: String, required: true },
  account_status: {
    default: "Inactive",
    type: String,
  },
  pan_number: {},
  qr_code_screenshot: {
    default: "",
    type: String,
  },
  taskwallet: {
    type: Number,
    default: 0,
  },
  referrelwallet: {
    type: Number,
    default: 0,
  },
  Totalwallet: {
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

//generating token
registrationSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Registration = mongoose.model("Cust_Master", registrationSchema);

module.exports = Registration;
