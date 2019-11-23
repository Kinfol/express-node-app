const toDoController = require('../todo-controller');

describe("ToDoController.createToDo", () =>{
    it("should have a createTodo function", () =>{
        expect(typeof toDoController.createTodo).toBe("function");
    })
})