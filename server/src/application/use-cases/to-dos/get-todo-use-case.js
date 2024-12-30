class GetTodoUseCase {
  constructor (todoRepository) {
    this.todoRepository = todoRepository
  }

  async execute (id) {
    if (!id) {
      throw new Error('id is required')
    }

    return await this.todoRepository.get(id)
  }
}

module.exports = GetTodoUseCase
