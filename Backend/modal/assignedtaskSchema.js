const mongoose = require("mongoose");

const assignedtaskSchema = new mongoose.Schema({
  customer_id: {},
  s_no: {},
  video_id: {},
  videoUrl: {},
  status: {
    type: String,
    default: "Pending",
  },
  completedAt: {
    type: Date,
    default: Date.now,
  },
});

const AssignedtaskSchema = mongoose.model(
  "assigned_task_master",
  assignedtaskSchema
);

module.exports = AssignedtaskSchema;
