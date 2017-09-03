const jwt = require('jsonwebtoken')
require('dotenv').config()

// const checkLogin = (req,res,next) => {
//   jwt.verify(req.headers.token, process.env.SECRET_JWT, (err,decoded) => {
//     if(err) {res.send(err)}
//     else {
//       console.log('ini decoded >>', decoded);
//       req.decoded = decoded
//       if(req.params.id == decoded.id) {
//         next()
//       } else {res.send('ditolak gan')}
//     }
//   }) //token = Authorization
// }

const checkAuth = (req,res,next) => {
  jwt.verify(req.headers.token, process.env.SECRET_JWT, (err,decoded) => {
    if(err) {res.send(err)}
    else {
      if(decoded.isAdmin){
        next()

      } else {
        if(req.headers.id == decoded.id) {
          next()
        } else {res.send('ditolak gan')}
        // res.status(401).send('You are not auth')
      }
    }
  }) //token = Authorization
}


module.exports = {
  // checkLogin,
  checkAuth
}
