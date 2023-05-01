const mongoose = require("mongoose");

const dipositSchema = new mongoose.Schema({
  customer_id: {},
  transaction_id: { type: String, required: true },
  account_status: {
    default: "Inactive",
    type: String,
  },
  qr_code_screenshot: {},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DipositSchema = mongoose.model("Diposit_Master", dipositSchema);

module.exports = DipositSchema;
