class DeleteTodoUseCase {
  constructor (todoRepository) {
    this.todoRepository = todoRepository
  }

  async execute (id) {
    return await this.todoRepository.del(id)
  }
}

module.exports = DeleteTodoUseCase
