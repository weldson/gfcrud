import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cities', table => {
    table;
    table.integer('id').unsigned().unique().notNullable().primary();
    table.string('name').primary();
    table.integer('state_id').unsigned().notNullable();
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
