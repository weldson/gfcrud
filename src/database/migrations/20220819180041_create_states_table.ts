import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('states', table => {
    table.string('id').primary();
    table.string('name').primary();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('states');
}
