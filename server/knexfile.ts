import 'dotenv/config'
import type { Knex } from "knex";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, DB_SSL } = process.env;


const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: DB_HOST,
      port: Number(DB_PORT),
      user: DB_USER,
      password: DB_PASS,
      database: DB_NAME,
      ssl: DB_SSL,
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
    client: "postgresql",
    connection: {
      host: DB_HOST,
      port: Number(DB_PORT),
      user: DB_USER,
      password: DB_PASS,
      database: DB_NAME,
      ssl: DB_SSL,
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
    client: "postgresql",
    connection: {
      host: DB_HOST,
      port: Number(DB_PORT),
      user: DB_USER,
      password: DB_PASS,
      database: DB_NAME,
      ssl: DB_SSL,
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
