var express = require('express');
var router = express.Router();
var controller = require ('../controllers/todoController')
var auth  = require('../helpers/authorizer')

router.get('/', auth.checkLogin, controller.getAllTodoes);
router.post('/', auth.checkLogin, controller.addTodo);
router.get('/:id', auth.checkLogin, auth.checkAuth, controller.getSingleTodo);
router.get('/user', auth.checkLogin, controller.findByUserId);
router.put('/:id', auth.checkLogin, auth.checkAuth, controller.updateTodo);
router.delete('/:id', auth.checkLogin, auth.checkAuth, controller.deleteTodo);

module.exports = router;
