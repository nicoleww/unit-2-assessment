const Todos = require('../data/todos');

function init(req, res) {
    res.render('index', {title: 'Unit 2 Assessment', todos: Todos });
};

// async function newTodo(req, res) {
//     await todos.create({
//         todo = (req.body),
//         done = false,
//     })
//     todos.push(todo);
//     res.redirect('/');
// }

async function newTodo(req, res) {
    let todoArr = Todos
    let newTodo = {
        todo: req.body.new,
        done: false,
    };
    todoArr.push(newTodo);
    res.redirect('/');
}

module.exports = {
    init,
    newTodo
};
