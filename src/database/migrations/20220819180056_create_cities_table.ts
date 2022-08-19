import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cities', table => {
    table.string('id').primary();
    table.string('name').primary();
    table.string('state_id').notNullable();
    table
      .foreign('state_id')
      .references('id')
      .inTable('states')
      .onUpdate('CASCADE')
      .onDelete('SET NULL');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('cities');
}
