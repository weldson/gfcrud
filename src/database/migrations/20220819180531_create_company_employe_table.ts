import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('company_employe', table => {
    table.uuid('company_id');
    table
      .foreign('company_id')
      .references('id')
      .inTable('companies')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.uuid('employe_id');
    table
      .foreign('employe_id')
      .references('id')
      .inTable('employees')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamps(true, true);
    table.primary(['company_id', 'employe_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('company_employe');
}
