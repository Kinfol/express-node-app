const TodoController = require('../../constrollers/todo-controller');
const TodoModel = require('../../model/todo-model');
const httpMocks = require('node-mocks-http');
const newTodo = require('../mock-data/new-todo.json')

//mongoose model has different methods. Here we use the create method.
TodoModel.create = jest.fn();

// as the request, response and next will be used in multiple tests
// we make use of beforeEach() function to initialise and avoid duplication

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

describe("TodoController.createTodo", () => {
  // dependencies for it steps 
  beforeEach(() => {
    req.body = newTodo;
    const p1 = new TodoController.toDo()
    p1.createTodo(req, res, next);
    p1.createResponse(req, res, next)
  });

  it("should have a createTodo function", () => {
    expect(typeof TodoController.toDo).toBe("function");
  });

  /* test is to make sure that the method in todo-controller 
  is calling the create method made available by todo-model
  to create a model 
  Note: we don't want to test the implementation, as that is part of the integration testing*/
  it("should call TodoModel.create", () => {
    //instantiating the todo-controller class
    //calling the method from the class.
    expect(TodoModel.create).toBeCalledWith(newTodo);
    
  });
  it("should return 201 response code", () => {
    // p1.createTodo(req, res, next);
    expect(res.statusCode).toBe(201);
    // expect(res._isEndCalled()).toBeTruthy();
   });
})





