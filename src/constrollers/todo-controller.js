const TodoModel = require ('../model/todo-model')


class ToDo {
    createTodo(req, res, next){
        return TodoModel.create(req.body);
    }

}

module.exports = {
    "toDo":ToDo
};