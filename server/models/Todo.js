const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: 'users'},
  task_name: {
    type: String,
    required: [true, 'harus diisi']
  },
  status: {
    type: Boolean,
    default: false
  },
  tags: {
    type: String
  }
}, {timestamps: true});

const modelTodo = mongoose.model('todo', todoSchema);

module.exports = modelTodo;
