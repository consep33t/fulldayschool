// app/lib/db.js
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.PUBLIC_DB_HOST,
  user: process.env.PUBLIC_DB_USER,
  password: process.env.PUBLIC_DB_PASSWORD,
  database: process.env.PUBLIC_DB,
});

// Test the connection and handle success or error
const testConnection = async () => {
  try {
    // Coba koneksi ke database
    const connection = await pool.getConnection();
    console.log("Database connection successful!");
    connection.release(); // Jangan lupa untuk melepaskan koneksi setelah berhasil.
  } catch (error) {
    // Menangani error jika koneksi gagal
    console.error("Error connecting to the database:", error.message);
  }
};

// Call the testConnection function to check the connection when the app starts
testConnection();

export default pool;
