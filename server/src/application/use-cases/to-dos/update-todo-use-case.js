class UpdateTodoUseCase {
  constructor (todoRepository) {
    this.todoRepository = todoRepository
  }

  async execute (id, properties) {
    if (!id) {
      throw new Error('id is required')
    }
    id = Number(id)
    return await this.todoRepository.update(id, properties)
  }
}
module.exports = UpdateTodoUseCase
