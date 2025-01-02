const express = require('express')
const createTodoControllerFactory = require('../../main/factories/todo-controller-factory')

const router = express.Router()
const todoController = createTodoControllerFactory()

router.get('/', (req, res) => todoController.getAllTodos(req, res))
router.get('/:id', (req, res) => todoController.getTodo(req, res))
router.post('/', (req, res) => todoController.postTodo(req, res))
router.patch('/:id', (req, res) => todoController.patchTodo(req, res))
router.delete('/', (req, res) => todoController.deleteAllTodos(req, res))
router.delete('/:id', (req, res) => todoController.deleteTodo(req, res))

module.exports = router
