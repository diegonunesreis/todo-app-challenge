const express = require('express')
const createTodoControllerFactory = require('../shared/factories/createTodoControllerFactory')

const router = express.Router()
const todoController = createTodoControllerFactory()

router.get('/', (req, res) => todoController.getAllTodos(req, res))
router.get('/:id', (req, res) => todoController.getTodo(req, res))
router.post('/', (req, res) => todoController.createTodo(req, res))
router.patch('/:id', (req, res) => todoController.updateTodo(req, res))
router.delete('/', (req, res) => todoController.deleteAllTodos(req, res))
router.delete('/:id', (req, res) => todoController.deleteTodo(req, res))

module.exports = router
