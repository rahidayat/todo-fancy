var express = require('express');
var router = express.Router();

// var auth = require('../controllers/authController');

//User info route
router.get('/', (req,res) => {
  res.send('hello')
})

module.exports = router;
