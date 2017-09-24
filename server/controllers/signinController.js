const User = require('../models/User');
const genSalt = require('../helpers/salt');
const crypPass = require('../helpers/encrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

function signinUser (req,res) {
  if(!req.body.username || !req.body.password){
   res.status(403).send({msg: 'The login information was incorrect'})
  } else {
    User.findOne({
      username: req.body.username
    })
    .then(data => {
      // console.log(data);
      if(data.password == crypPass(req.body.password, data.salt)) {

        let token = jwt.sign({
            id: data._id,
            username: data.username,
            isAdmin: data.isAdmin
          }, process.env.SECRET_JWT);
          console.log('berhasil log in');
        res.send({token: token, msg: 'Welcome user'})

      } else {
        res.status(401).send({msg: 'Password salah'})
      }
    })
    .catch(err => {
      console.log('errornya signin', err);
      res.status(500).send({msg: 'An error has occured trying to log in'})
    })
  }
}


module.exports = {
  signinUser
}
