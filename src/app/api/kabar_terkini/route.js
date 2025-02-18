// app/api/kabar_terkini/route.js
import pool from "../../../../lib/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Tentukan direktori upload
const uploadDir = path.join(process.cwd(), "upload");

// Pastikan folder upload ada
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

export async function GET() {
  const [rows] = await pool.query("select * from kabar_terkini");
  return NextResponse.json(rows);
}

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");
  const judul = formData.get("judul");
  const isi = formData.get("isi");
  const tanggal_manual = formData.get("tanggal_manual");

  if (!file || !judul || !isi || !tanggal_manual) {
    return NextResponse.json({ error: "Incomplete data" }, { status: 400 });
  }

  // Ubah file menjadi buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Tentukan nama file dan path
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, fileName);

  // Tulis file ke direktori upload
  fs.writeFileSync(filePath, buffer);

  // Simpan URL dinamis untuk akses url
  const url = `/api/images/view/${fileName}`;

  try {
    await pool.query(
      "insert into kabar_terkini (judul, url, isi, tanggal_manual) values (?, ?, ?, ?)",
      [judul, url, isi, tanggal_manual]
    );
    return NextResponse.json({ message: "Image uploaded successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error uploading image" },
      { status: 500 }
    );
  }
}

// PUT: Update data berdasarkan id
export async function PUT(req) {
  const { id, judul, isi, gambar, tanggal_manual } = await req.json();
  await pool.query(
    "update kabar_terkini SET judul=?, isi=?, gambar=?, tanggal_manual=? where id=?",
    [judul, isi, gambar, tanggal_manual, id]
  );
  return NextResponse.json({ id, judul, isi, gambar, tanggal_manual });
}

// DELETE: Hapus data berdasarkan id
export async function DELETE(req) {
  const { id } = await req.json();
  await pool.query("delete from kabar_terkini where id=?", [id]);
  return NextResponse.json({ message: "Data berhasil dihapus" });
}
