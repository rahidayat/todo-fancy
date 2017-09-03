const User = require('../models/User');
const genSalt = require('../helpers/salt');
const crypPass = require('../helpers/encrypt');

function getAllUsers (req,res) {
  User.find({}).populate('task_name')
  .then(result => res.send(result))
  .catch(err=> res.send(err))
}

function getSingleUser(req, res) {
  User.find({_id: req.params.id}).populate('task_name')
  .then(result => res.send(result))
  .catch(err=> res.send(err))
}

function updateUser(req, res) {
  var salt = genSalt();
  var pass = crypPass(req.body.password, salt);
  User.update({_id: req.params.id}, {
    name: req.body.name,
    username: req.body.username,
    password: pass,
    email: req.body.email,
    salt: salt
  })
  .then(result => res.send(result))
  .catch(err=> res.send(err))
}

function deleteUser(req, res) {
  User.deleteOne({_id: req.params.id})
  .then(result => res.send('user berhasil dihapus'))
  .catch(err=> res.send(err))
}



module.exports = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser
}
