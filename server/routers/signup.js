var express = require('express');
var router = express.Router();
var controller = require ('../controllers/signupController')

router.post('/', controller.signupUser);

module.exports = router;
