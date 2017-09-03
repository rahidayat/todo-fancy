var express = require('express');
var router = express.Router();
var controller = require ('../controllers/userController')
var todoCont = require ('../controllers/todoController')
var auth  = require('../helpers/authorizer')

router.get('/', auth.checkAuth, controller.getAllUsers);
router.get('/:id', auth.checkAuth, controller.getSingleUser);
router.put('/:id', auth.checkAuth, controller.updateUser);
router.delete('/:id', auth.checkAuth, controller.deleteUser);
//
// router.get('/todo', auth.checkAdmin, todoCont.getAllTodoes);
// router.get('/:id/todo', auth.checkAdmin, todoCont.getAllTodoes);
// router.post('/:id/add-todo', auth.checkLogin, todoCont.addTodo);

module.exports = router;
