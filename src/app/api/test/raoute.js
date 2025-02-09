import connection from "@/app/lib/db";

export default async function handler(req, res) {
  try {
    const [rows] = await connection.execute("SELECT * FROM students"); // Replace with your actual table name
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Error executing query" });
  } finally {
    await connection.end();
  }
}
