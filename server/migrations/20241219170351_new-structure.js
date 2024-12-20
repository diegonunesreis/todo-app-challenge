exports.up = async function (knex) {
  await knex.schema.createTable('organizations', function (table) {
    table.increments('id').primary();
    table.string('name', 100).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('name', 200).notNullable();
    table.string('email', 200).notNullable().unique(); 
    table.string('pwd_hash', 255).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('users_organizations', function (table) {
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table
      .integer('organization_id')
      .unsigned()
      .references('id')
      .inTable('organizations')
      .onDelete('CASCADE');
    table.primary(['user_id', 'organization_id']);
  });

  await knex.schema.createTable('projects', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table
      .integer('organization_id')
      .unsigned()
      .references('id')
      .inTable('organizations')
      .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('status', function (table) {
    table.increments('id').primary();
    table.string('description', 100).notNullable();
    table.boolean('active').defaultTo(true);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('tasks', function (table) {
    table.increments('id').primary();
    table.string('title', 200).notNullable();
    table.text('description');
    table
      .integer('status_id')
      .unsigned()
      .references('id')
      .inTable('status')
      .onDelete('SET NULL'); 
    table
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE');
    table
      .integer('assigned_to')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('SET NULL');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('comments', function (table) {
    table.increments('id').primary();
    table.text('content').notNullable();
    table
      .integer('task_id')
      .unsigned()
      .references('id')
      .inTable('tasks')
      .onDelete('CASCADE');
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('comments');
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('status');
  await knex.schema.dropTableIfExists('projects');
  await knex.schema.dropTableIfExists('users_organizations');
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('organizations');
};