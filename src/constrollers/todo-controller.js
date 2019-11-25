const TodoModel = require ('../model/todo-model')


class ToDo {
    createTodo(req, res, next){
        return TodoModel.create(req.body);
    }

    createResponse(req, res, next){
        const createModel  = TodoModel.create(req.body);
        res.status(201).json(createModel);
    }
}


module.exports = {
    "toDo":ToDo
};