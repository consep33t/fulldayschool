// app/api/kabar_terkini/route.js
import pool from "../../../../lib/db";
import { NextResponse } from "next/server";

// GET: Ambil semua data
export async function GET() {
  const [rows] = await pool.query("SELECT * FROM jadwal_masuk");
  return NextResponse.json(rows);
}

// POST: Tambah data baru
export async function POST(request) {
  const { id, jam } = await request.json();
  const [result] = await pool.query(
    "INSERT INTO jadwal_masuk (id, jam) VALUES (?, ?)",
    [id, jam]
  );
  return NextResponse.json({
    id: result.insertId,
    jam,
  });
}
// PUT: Update data berdasarkan id
export async function PUT(request) {
  const { id, jam } = await request.json();
  if (!id || !jam) {
    return NextResponse.json(
      { error: "ID dan Jam diperlukan" },
      { status: 400 }
    );
  }

  try {
    await pool.query("UPDATE jadwal_masuk SET jam=? WHERE id=?", [jam, id]);
    return NextResponse.json({ id, jam, message: "Data berhasil diupdate" });
  } catch (error) {
    console.error("Error saat update:", error);
    return NextResponse.json(
      { error: "Gagal mengupdate data" },
      { status: 500 }
    );
  }
}

// DELETE: Hapus data berdasarkan id
export async function DELETE(request) {
  const { id } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "ID diperlukan" }, { status: 400 });
  }

  try {
    await pool.query("DELETE FROM jadwal_masuk WHERE id=?", [id]);
    return NextResponse.json({ message: "Data berhasil dihapus" });
  } catch (error) {
    console.error("Error saat menghapus:", error);
    return NextResponse.json(
      { error: "Gagal menghapus data" },
      { status: 500 }
    );
  }
}
