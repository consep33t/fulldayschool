// app/api/kabar_terkini/route.js
import pool from "../../../../lib/db";
import { NextResponse } from "next/server";

// GET: Ambil semua data
export async function GET() {
  const [rows] = await pool.query("select * from popup_program_kegiatan");
  return NextResponse.json(rows);
}

// POST: Tambah data baru
export async function POST(request) {
  const { paragraf } = await request.json();
  const [result] = await pool.query(
    "insert into popup_program_kegiatan (paragraf, tanggal_dibuat) VALUES (?, NOW())",
    [paragraf]
  );
  return NextResponse.json({
    id: result.insertId,
    paragraf,
  });
}

// PUT: Update data berdasarkan id
export async function PUT(request) {
  const { id, paragraf } = await request.json();
  await pool.query("update popup_program_kegiatan set paragraf=? where id=?", [
    paragraf,
    id,
  ]);
  return NextResponse.json({ id, paragraf });
}

// DELETE: Hapus data berdasarkan id
export async function DELETE(request) {
  const { id } = await request.json();
  await pool.query("delete from popup_program_kegiatan where id=?", [id]);
  return NextResponse.json({ message: "Data berhasil dihapus" });
}
