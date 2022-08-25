import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return knex.schema.createTable('states', table => {
    table.integer('id').unsigned().unique().notNullable().primary();
    table.string('name').primary();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('states');
}
