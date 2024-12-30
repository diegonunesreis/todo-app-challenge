class UpdateTodoUseCase {
  constructor (todoRepository) {
    this.todoRepository = todoRepository
  }

  async execute (id, properties) {
    return await this.todoRepository.update(id, properties)
  }
}
module.exports = UpdateTodoUseCase
