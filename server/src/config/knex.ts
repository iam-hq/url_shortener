import Knex from "knex";

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, DB_SSL } = process.env;

const knex = Knex({
  client: "postgresql",
  connection: {
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    ssl: DB_SSL,
  },
});

export const onDatabaseConnect = async () => knex.raw("select 1");

export default knex;
