const mongoose = require("mongoose");

const withdrawSchema = new mongoose.Schema({
  customer_id: { type: Number, required: true },
  requestType: { type: String, required: true },
  qr_code_screenshot: {},
  amount: { type: Number, required: Number },
  status: { type: String, default: "Pending" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const WithdrawSchema = mongoose.model("withdraw_master", withdrawSchema);

module.exports = WithdrawSchema;
