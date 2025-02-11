class DeleteTodoUseCase {
  constructor (todoRepository) {
    this.todoRepository = todoRepository
  }

  async execute (id) {
    if (!id) {
      throw new Error('id is required')
    }
    id = Number(id)

    return await this.todoRepository.del(id)
  }
}

module.exports = DeleteTodoUseCase
