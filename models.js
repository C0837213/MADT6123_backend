import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['admin', 'user']
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
  }
})

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
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
    default: false
  },
  prerequisite: {
    type: String
  }
})

export const userModel = mongoose.model('users', userSchema) 
export const taskModel = mongoose.model('tasks', taskSchema) 
