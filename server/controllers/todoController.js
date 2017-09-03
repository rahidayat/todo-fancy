const Todo = require('../models/Todo');

function getAllTodoes (req,res) {
  Todo.find({}).populate('user_id')
  .then(result => res.send(result))
  .catch(err=> res.send(err))
}

function addTodo(req, res) {
  Todo.create({
    user_id: req.headers.id,
    task_name: req.body.task_name,
    tags: req.body.tags
  })
  .then(result => res.send(result))
  .catch(err=> res.send(err))
}

function getSingleTodo(req, res) {
  Todo.find({_id: req.params.id}).populate('user_id')
  .then(result => res.send(result))
  .catch(err=> res.send(err))
}

function updateTodo(req, res) {
  Todo.update({_id: req.params.id}, {
    user_id: req.headers.id,
    task_name: req.body.task_name,
    status: req.body.status,
    tags: req.body.tags
  })
  .then(result => res.send(result))
  .catch(err=> res.send(err))
}

function deleteTodo(req, res) {
  Todo.deleteOne({_id: req.params.id})
  .then(result => res.send('task berhasil dihapus'))
  .catch(err=> res.send(err))
}

function findByUserId(req,res) {
  Todo.find({user_id: req.params.id}).populate('user_id')
  .then(result=>  res.send(result))
}

module.exports = {
  addTodo,
  getAllTodoes,
  getSingleTodo,
  updateTodo,
  deleteTodo,
  findByUserId
}