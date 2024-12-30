class CreateTodoUseCase {
  constructor (todoRepository) {
    this.todoRepository = todoRepository
  }

  async execute (title, order) {
    if (!title) {
      throw new Error('title is required')
    }

    return await this.todoRepository.create(title, order)
  }
}

module.exports = CreateTodoUseCase
