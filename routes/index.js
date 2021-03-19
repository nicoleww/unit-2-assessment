var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');
const todos = require('../data/todos');

/* GET home page. */
router.get('/', todosCtrl.init);
router.post('/', todosCtrl.newTodo);

module.exports = router;
