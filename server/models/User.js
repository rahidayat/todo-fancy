const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'harus diisi']
  },
  username: {
    type: String,
    required: [true, 'harus diisi']
  },
  password: {
    type: String,
    required: [true, 'harus diisi']
  },
  email: {
    type: String,
    required: [true, 'harus diisi']
  },
  salt: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
  // todo_list: [{type: Schema.Types.ObjectId, ref: 'todos'}]
})

const modelUser = mongoose.model('users', userSchema)

module.exports = modelUser
