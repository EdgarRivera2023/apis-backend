// This line allows us to use the .env variables
require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // Development environment configuration
  development: {
    client: 'pg', // Specifies that we are using PostgreSQL
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: './migrations' // Tells Knex where to find our migration files
    }
  },

  // (We can add other environments like 'production' later)

};