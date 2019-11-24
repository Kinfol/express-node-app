const TodoModel = require ('../model/todo-model')


class ToDo {
    createTodo(){
        return TodoModel.create();
    }

}

module.exports = {
    "toDo":ToDo
};