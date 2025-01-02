class TodoController {
  constructor (
    createTodoUseCase,
    getTodoUseCase,
    getAllTodosUseCase,
    updateTodoUseCase,
    deleteTodoUseCase,
    deleteAllTodosUseCase
  ) {
    this.createTodoUseCase = createTodoUseCase
    this.getTodoUseCase = getTodoUseCase
    this.getAllTodosUseCase = getAllTodosUseCase
    this.updateTodoUseCase = updateTodoUseCase
    this.deleteTodoUseCase = deleteTodoUseCase
    this.deleteAllTodosUseCase = deleteAllTodosUseCase
  }

  async getAllTodos (req, res) {
    try {
      const todos = await this.getAllTodosUseCase.execute()
      res.status(200).json(todos.map(todo => this.createResponseData(req, todo)))
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch todos', error })
    }
  }

  async getTodo (req, res) {
    try {
      const todo = await this.getTodoUseCase.execute(req.params.id)
      if (!todo) return res.status(404).json({ message: 'Todo not found' })
      res.status(200).json(this.createResponseData(req, todo))
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch todo', error })
    }
  }

  async postTodo (req, res) {
    try {
      const created = await this.createTodoUseCase.execute(req.body.title, req.body.order)
      return res.status(201).json(this.createResponseData(req, created))
    } catch (error) {
      res.status(500).json({ message: 'Failed to post a todo', error })
    }
  }

  async patchTodo (req, res) {
    try {
      const patched = await this.updateTodoUseCase.execute(req.params.id, req.body)
      return res.status(200).json(this.createResponseData(req, patched))
    } catch (error) {
      res.status(500).json({ message: 'Failed to update a todo', error })
    }
  }

  async deleteAllTodos (req, res) {
    try {
      await this.deleteAllTodosUseCase.execute()
      return res.status(200).send()
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete all todos', error })
    }
  }

  async deleteTodo (req, res) {
    try {
      await this.deleteTodoUseCase.execute(req.params.id)
      return res.status(200).send()
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete a todo', error })
    }
  }

  createResponseData (req, data) {
    const protocol = req.protocol
    const host = req.get('host')
    const id = data.id

    return {
      title: data.title,
      order: data.order,
      completed: data.completed || false,
      url: `${protocol}://${host}/todos/${id}`
    }
  }
}

module.exports = TodoController
