const TodoModel = require ('../model/todo-model')


class ToDo {
    createTodo(req, res, next){
        return TodoModel.create(req.body);
        
    }

    createRecord(req, res, next){
        //response 201 = Created
        res.status(201).send();
    }

}


module.exports = {
    "toDo":ToDo
};