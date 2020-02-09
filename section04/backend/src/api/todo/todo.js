const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
}, { timestamps: true });

module.exports.Todo = restful.model('Todo', todoSchema)
