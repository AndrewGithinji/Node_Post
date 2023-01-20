import { Pool } from "pg";
require("dotenv").config();

const pool = new Pool({
  database: process.env.POSTGRES_DB,
  port: 5432,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});

module.exports = pool;