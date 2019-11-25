const TodoModel = require ('../model/todo-model')


class ToDo {
    createTodo(req, res, next){
        return TodoModel.create(req.body);
        
    }

    createResponse(req, res, next){
        res.status(201).send();
    }

}


module.exports = {
    "toDo":ToDo
};