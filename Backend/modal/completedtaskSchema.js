const mongoose = require("mongoose");

const completedtaskSchema = new mongoose.Schema({
  customer_id: {
    type: Number,
  },
  video_id: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  s_no: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CompletedtaskSchema = mongoose.model(
  "completed_task_master",
  completedtaskSchema
);

module.exports = CompletedtaskSchema;
