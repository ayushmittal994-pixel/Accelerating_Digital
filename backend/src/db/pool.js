import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pkg;

export const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

export const query = (text, params) => pool.query(text, params);

export async function assertDbConnection() {
  const { rows } = await pool.query("SELECT 1 AS ok");
  return rows[0].ok === 1;
}
