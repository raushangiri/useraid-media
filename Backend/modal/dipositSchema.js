const mongoose = require("mongoose");

const dipositSchema = new mongoose.Schema({
  customer_id: {},
  transaction_id: { type: String, required: true },
  qr_code_screenshot: {},
  account_status: {
    default: "Inactive",
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DipositSchema = mongoose.model("Diposit_Master", dipositSchema);

module.exports = DipositSchema;
