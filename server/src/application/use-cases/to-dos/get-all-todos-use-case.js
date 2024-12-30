class GetAllTodosUseCase {
  constructor (todoRepository) {
    this.todoRepository = todoRepository
  }

  async execute () {
    return await this.todoRepository.GetAllTodosUseCase()
  }
}

module.exports = GetAllTodosUseCase
