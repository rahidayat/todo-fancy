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
  .then(result => res.send(result))
  .catch(err=> res.send(err))
}


module.exports = {
  signupUser
}
