import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('companies', table => {
    table.string('id').primary();
    table.string('name', 255).notNullable();
    table.string('email', 255).notNullable().unique();
    table.string('document_number', 15).notNullable().unique();
    table.string('city_id');
    table
      .foreign('city_id')
      .references('id')
      .inTable('cities')
      .onUpdate('CASCADE')
      .onDelete('SET NULL');
    table.string('neighborhood', 255).notNullable();
    table.string('street', 255).notNullable();
    table.string('address_number', 4).notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('companies');
}
