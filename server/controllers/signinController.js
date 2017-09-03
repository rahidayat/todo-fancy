const User = require('../models/User');
const genSalt = require('../helpers/salt');
const crypPass = require('../helpers/encrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

function signinUser (req,res) {
  if (req.headers.tes == undefined) {
    User.findOne({
      username: req.body.username
    })
    .then(data => {
      // console.log(data);
      if(data.password == crypPass(req.body.password, data.salt)) {

        let token = jwt.sign({
            id: data._id,
            username: data.username,
            email: data.email,
            isAdmin: data.isAdmin
          }, process.env.SECRET_JWT);
          console.log('berhasil log in');
        res.send({token: token, id: data._id})

      } else {
        res.send('wrong password')
      }
    })
    .catch(err => res.send(err))
  }
}


module.exports = {
  signinUser
}
