// app/api/kabar_terkini/route.js
import pool from "../../../../lib/db";
import { NextResponse } from "next/server";

// GET: Ambil semua data
export async function GET() {
  const [rows] = await pool.query("select * from identitas");
  return NextResponse.json(rows);
}

// POST: Tambah data baru
export async function POST(request) {
  const formData = await request.formData();
  const judul = formData.get("judul");
  const deskripsi = formData.get("deskripsi");
  const [result] = await pool.query(
    "insert into identitas (judul, deskripsi) VALUES (?, ?)",
    [judul, deskripsi]
  );
  return NextResponse.json({
    id: result.insertId,
    judul,
    deskripsi,
  });
}

// PUT: Update data berdasarkan id
export async function PUT(request) {
  const { id, judul, deskripsi } = await request.json();
  await pool.query("update identitas set judul=?, deskripsi=? where id=?", [
    judul,
    deskripsi,
    id,
  ]);
  return NextResponse.json({ id, judul, deskripsi });
}

// DELETE: Hapus data berdasarkan id
export async function DELETE(request) {
  const { id } = await request.json();
  await pool.query("delete from identitas where id=?", [id]);
  return NextResponse.json({ message: "Data berhasil dihapus" });
}
