const TodoController = require('../constrollers/todo-controller');
const TodoModel = require('../model/todo-model');

//mongoose model has different methods. Here we use the create method.
TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.toDo).toBe("function");
  });

  /* this test is to make sure that the method in todo-controller 
  is calling the create method made available by todo-model
  to create a model 
  Note: we don't want to test the implementation, as that is part of the integration testing*/
  it("should call TodoModel.create", () => {
    //instantiating the todo-controller class
    const p1 = new TodoController.toDo()
    //calling the method from the class.
    p1.createTodo();
    expect(TodoModel.create).toBeCalled();
  });
});




