const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  customer_id: {},
  transaction_id: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PaymentSchema = mongoose.model("Payment_Master", paymentSchema);

module.exports = PaymentSchema;
