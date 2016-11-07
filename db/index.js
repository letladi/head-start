const knexConfig = require('./knexfile.js')
const env = require('../config/environmentVariables.js')
const knexConfigForCurrentEnv = knexConfig[env.env]
const knex = require('knex')(knexConfigForCurrentEnv)
const bookshelf = require('bookshelf')

knex.migrate.latest().then(()=> knex.seed.run())

module.exports = bookshelf(knex)
