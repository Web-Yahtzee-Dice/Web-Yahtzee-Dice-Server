import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.db_host,
      port: Number(process.env.db_port),
      user: process.env.db_user,
      password: process.env.db_pass,
      database: process.env.db_name,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  staging: {
    client: "mysql2",
    connection: {
      host: process.env.db_host,
      port: Number(process.env.db_port),
      user: process.env.db_user,
      password: process.env.db_pass,
      database: process.env.db_name,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "mysql2",
    connection: {
      host: process.env.db_host,
      port: Number(process.env.db_port),
      user: process.env.db_user,
      password: process.env.db_pass,
      database: process.env.db_name,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
