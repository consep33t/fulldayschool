// app/lib/db.js
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.PUBLIC_DB_HOST,
  user: process.env.PUBLIC_DB_USER,
  password: process.env.PUBLIC_DB_PASSWORD,
  database: process.env.PUBLIC_DB,
});

export default pool;
