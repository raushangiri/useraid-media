const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  customer_id: {
    type: Number,
  },
  amount: {},
  wallettype: {
    type: String,
  },
  payment_status: {
    type: String,
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const WalletSchema = mongoose.model("userwallet", walletSchema);

module.exports = WalletSchema;
