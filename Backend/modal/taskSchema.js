const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  video_id: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  s_no: {
    type: Number,
  },
});

const TaskSchema = mongoose.model("task_master", taskSchema);

module.exports = TaskSchema;
