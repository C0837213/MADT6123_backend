import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["admin", "user"],
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  startDate: {
    type: Number,
    require: true,
  },
  endDate: {
    type: Number,
    require: true,
  },
  assignee: {
    type: Array,
    default: [],
  },
  task: {
    type: Array,
    default: [],
  },
});

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  assignee: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  prerequisite: {
    type: String,
  },
  completedAt: {
    type: String,
  },
  workingHours: {
    type: String,
  }
});

export const userModel = mongoose.model("users", userSchema);
export const taskModel = mongoose.model("tasks", taskSchema);
export const projectModel = mongoose.model("projects", projectSchema);
