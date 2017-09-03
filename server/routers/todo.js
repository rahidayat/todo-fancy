var express = require('express');
var router = express.Router();
var controller = require ('../controllers/todoController')
var auth  = require('../helpers/authorizer')

router.get('/', controller.getAllTodoes);
router.post('/', auth.checkAuth, controller.addTodo);
router.get('/:id', auth.checkAuth, controller.getSingleTodo);
router.get('/user/:id', auth.checkAuth, controller.findByUserId);
router.put('/:id', auth.checkAuth, controller.updateTodo);
router.delete('/:id', auth.checkAuth, controller.deleteTodo);

module.exports = router;
