// 	•	Se main/factories existe apenas para instanciar casos de uso ou controladores, considere movê-lo para application/services, 
// que pode servir como um ponto de entrada para inicialização.

const CreateTodoUseCase = require('../use-cases/to-dos/create-todo-use-case')
const GetTodoUseCase = require('../use-cases/to-dos/get-todo-use-case')
const GetAllTodosUseCase = require('../use-cases/to-dos/get-all-todos-use-case')
const UpdateTodoUseCase = require('../use-cases/to-dos/update-todo-use-case')
const DeleteTodoUseCase = require('../use-cases/to-dos/delete-todo-use-case')
const DeleteAllTodosUseCase = require('../use-cases/to-dos/delete-all-todos-use-case')

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
