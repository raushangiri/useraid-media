const mongoose = require("mongoose");

const taskhistorySchema = new mongoose.Schema({
  customer_id: {},
  status: {
    type: String,
  },
  completedAt: {
    type: Date,
    default: Date.now,
  },
});

const TaskhistorySchema = mongoose.model(
  "task-history_master",
  taskhistorySchema
);

module.exports = TaskhistorySchema;
