const Todo = require('../models/Todo');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const checkLogin = (req,res,next) => {
  if(req.headers.token == null) {
    res.status(401).send({msg: 'Please log in first'})
  } else {
    console.log('>>>>> masuk cek login');
    next ()}
  // jwt.verify(req.headers.token, process.env.SECRET_JWT, (err,decoded) => {
  //   if(err) {res.send(err)}
  //   else {
  //     console.log('ini decoded >>', decoded);
  //     req.decoded = decoded
  //     if(req.params.id == decoded.id) {
  //       next()
  //     } else {res.send('ditolak gan')}
  //   }
  // }) //token = Authorization
}

const checkAdmin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_JWT, (err,decoded) => {
    if(err) {
      res.send(err)
    } else {
        if(!decoded.isAdmin) {
          res.status(401).send({msg: 'You are not admin'})
        } else { next ()}
    }
  })
}

const checkAuth = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_JWT, (err,decoded) => {
    Todo.findOne({_id: req.params.id})
    .then(data => {
      if(decoded.id == data.user_id) {
        next ()
      } else {
        res.status(401).send({msg: 'You are not auth'})
      }
    })
  }) //token = Authorization
}


module.exports = {
  checkLogin,
  checkAdmin,
  checkAuth
}
