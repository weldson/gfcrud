import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('states').del();

  // Inserts seed entries
  await knex('states').insert([
    { id: 1, name: 'Maranhão' },
    { id: 2, name: 'São Paulo' },
    { id: 3, name: 'Santa Catarina' },
  ]);
}
