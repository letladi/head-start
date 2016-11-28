const env = require('../config/environmentVariables.js')

module.exports = {

  development: {
    client: env.database_client,
    connection: env.database_connection,
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations`
    },
    seeds: {
      directory: `${__dirname}/seeds`
    }
  },

  test: {
    client: env.database_client,
    connection: env.database_connection,
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations`
    },
    seeds: {
      directory: `${__dirname}/seeds`
    }
  },

  staging: {
    client: env.database_client,
    connection: env.database_connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations`
    },
    seeds: {
      directory: `${__dirname}/seeds`
    }
  },

  production: {
    client: env.database_client,
    connection: env.database_connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations`
    },
    seeds: {
      directory: `${__dirname}/seeds`
    }
  }

}
