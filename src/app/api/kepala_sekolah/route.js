// app/api/kabar_terkini/route.js
import pool from "../../../../lib/db";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// Tentukan direktori upload
const uploadDir = path.join(process.cwd(), "upload");

// Pastikan folder upload ada
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// GET: Ambil semua data
export async function GET() {
  const [rows] = await pool.query("SELECT * FROM kepala_sekolah");
  return NextResponse.json(rows);
}

// POST: Tambah data baru
export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");
  const nama = formData.get("nama");
  const moto = formData.get("moto");
  const paragraf = formData.get("paragraf");

  if (!file || !nama || !moto || !paragraf) {
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
      "INSERT INTO kepala_sekolah (nama, url, moto, paragraf) VALUES (?, ?, ?, ?)",
      [nama, url, moto, paragraf]
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
  const { id, nama, moto, paragraf, url } = await req.json();
  if (!id || !nama || !moto || !paragraf || !url) {
    return NextResponse.json(
      { error: "Semua Kolom Harus Di moto" },
      { status: 400 }
    );
  }

  try {
    await pool.query(
      "UPDATE kepala_sekolah SET nama=?, moto=?, paragraf=?, url=? WHERE id=?",
      [nama, moto, paragraf, url, id]
    );
    return NextResponse.json({
      id,
      nama,
      moto,
      paragraf,
      url,
      message: "Data berhasil diupdate",
    });
  } catch (error) {
    console.error("Error saat update:", error);
    return NextResponse.json(
      { error: "Gagal mengupdate data" },
      { status: 500 }
    );
  }
}

// DELETE: Hapus data berdasarkan id
export async function DELETE(req) {
  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ error: "ID diperlukan" }, { status: 400 });
  }

  try {
    await pool.query("DELETE FROM kepala_sekolah WHERE id=?", [id]);
    return NextResponse.json({ message: "Data berhasil dihapus" });
  } catch (error) {
    console.error("Error saat menghapus:", error);
    return NextResponse.json(
      { error: "Gagal menghapus data" },
      { status: 500 }
    );
  }
}
