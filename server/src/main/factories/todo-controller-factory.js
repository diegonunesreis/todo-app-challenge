const CreateTodoUseCase = require('../../application/use-cases/to-dos/create-todo-use-case')
const GetTodoUseCase = require('../../application/use-cases/to-dos/get-todo-use-case')
const GetAllTodosUseCase = require('../../application/use-cases/to-dos/get-all-todos-use-case')
const UpdateTodoUseCase = require('../../application/use-cases/to-dos/update-todo-use-case')
const DeleteTodoUseCase = require('../../application/use-cases/to-dos/delete-todo-use-case')
const DeleteAllTodosUseCase = require('../../application/use-cases/to-dos/delete-all-todos-use-case')

const TodoRepositoryImpl = require('../../infrastructure/database/repositories/todo-repository-impl')
const TodoController = require('../../presentation/controllers/todo-controller')

function todoControllerFactory () {
  const todoRepository = new TodoRepositoryImpl()

  const createTodoUseCase = new CreateTodoUseCase(todoRepository)
  const getTodoUseCase = new GetTodoUseCase(todoRepository)
  const getAllTodosUseCase = new GetAllTodosUseCase(todoRepository)
  const updateTodoUseCase = new UpdateTodoUseCase(todoRepository)
  const deleteTodoUseCase = new DeleteTodoUseCase(todoRepository)
  const deleteAllTodosUseCase = new DeleteAllTodosUseCase(todoRepository)

  return new TodoController(
    createTodoUseCase,
    getTodoUseCase,
    getAllTodosUseCase,
    updateTodoUseCase,
    deleteTodoUseCase,
    deleteAllTodosUseCase
  )
}

module.exports = todoControllerFactory
