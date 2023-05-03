const mongoose = require("mongoose");

const supprtSchemahistory = new mongoose.Schema({
  customer_id: { type: Number, required: true },
  Subject: { type: String, required: true },
  status: { type: String, require: true },
  reply: { type: String, require: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SupprtSchemahistory = mongoose.model(
  "support_history_master",
  supprtSchemahistory
);

module.exports = SupprtSchemahistory;
