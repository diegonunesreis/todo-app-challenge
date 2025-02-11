class DeleteAllTodosUseCase {
  constructor (todoRepository) {
    this.todoRepository = todoRepository
  }

  async execute () {
    return await this.todoRepository.clear()
  }
}

module.exports = DeleteAllTodosUseCase
