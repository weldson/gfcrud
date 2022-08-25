import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('cities').del();

  // Inserts seed entries
  await knex('cities').insert([
    { id: 1, name: 'São Luís', state_id: 1 },
    { id: 2, name: 'Imperatriz', state_id: 1 },
    { id: 3, name: 'Caxias', state_id: 1 },
  ]);
}
