const User = require('../models/User');
const genSalt = require('../helpers/salt');
const crypPass = require('../helpers/encrypt');

function signupUser(req, res) {
  var salt = genSalt();
  var pass = crypPass(req.body.password, salt);
  User.create({
    name: req.body.name,
    username: req.body.username,
    password: pass,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    salt: salt
  })
  .then(() => {
    res.send({msg:`Hello ${req.body.username}! Your user was registered! Have fun!`})
  })
  .catch(err => {
    return res.status(400).send({msg: err.message})
  })
}


module.exports = {
  signupUser
}
