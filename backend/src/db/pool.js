import pkg from "pg";
//here pg means postgres and pkg means a varibale name  u can choose any
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pkg;
// here in this from pg package we are calling pool object
//here rather than creating manual it automates connection

export const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

export const query = (text, params) => pool.query(text, params);

//this will just perform health check
export async function assertDbConnection() {
  try {
    const { rows } = await query("SELECT 1 AS ok");
    return rows[0].ok === 1;
  } catch (error) {
    console.error(" Database connection failed:", error.message);
    return false; // Safely returns false instead of crashing the app
  }
}

// async function test(query) {
//   const test = await query("SELECT * FROM case_studies");
//   console.log("db test ", test);

//   return test;
// }
// test(query);
