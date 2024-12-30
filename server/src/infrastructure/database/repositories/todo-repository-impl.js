const knex = require('../connection')
const TodoRepository = require('../../../domain/repositories/todo-repository')

class TodoRepositoryImpl extends TodoRepository {
  async all () {
    return knex('todos')
  }

  async get (id) {
    const results = await knex('todos').where({ id })
    return results[0]
  }

  async create (title, order) {
    const results = await knex('todos').insert({ title, order }).returning('*')
    return results[0]
  }

  async update (id, properties) {
    const results = await knex('todos').where({ id }).update({ ...properties }).returning('*')
    return results[0]
  }

  // delete is a reserved keyword
  async del (id) {
    const results = await knex('todos').where({ id }).del().returning('*')
    return results[0]
  }

  async clear () {
    return knex('todos').del().returning('*')
  }
}

module.exports = TodoRepositoryImpl
