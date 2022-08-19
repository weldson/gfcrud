import type { Knex } from 'knex';

export default {
  development: {
    client: 'postgresql',
    connection: {
      database: 'gfcrud',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      extension: 'ts',
      directory: 'src/database/migrations',
    },
  },
};

// module.exports = config;
