var express = require('express');
var router = express.Router();
var controller = require ('../controllers/signinController')

router.post('/', controller.signinUser);

module.exports = router;
