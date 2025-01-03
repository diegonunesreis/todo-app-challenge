const express = require('express')
const createTodoControllerFactory = require('../../application/services/todo-controller-factory')

const router = express.Router()
const todoController = createTodoControllerFactory()

router.get('/', (req, res) => todoController.getAllTodos(req, res))
router.get('/todos/:id', (req, res) => todoController.getTodo(req, res))
router.post('/', (req, res) => todoController.postTodo(req, res))
router.patch('/todos/:id', (req, res) => todoController.patchTodo(req, res))
router.delete('/', (req, res) => todoController.deleteAllTodos(req, res))
router.delete('/todos/:id', (req, res) => todoController.deleteTodo(req, res))

module.exports = router
