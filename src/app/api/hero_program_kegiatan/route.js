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
  const [rows] = await pool.query("select * from hero_program_kegiatan");
  return NextResponse.json(rows);
}

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");
  const judul = formData.get("judul");
  const subjudul = formData.get("subjudul");

  if (!file || !judul || !subjudul) {
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
      "INSERT INTO hero_program_kegiatan (judul, url, subjudul) VALUES (?, ?, ?)",
      [judul, url, subjudul]
    );
    return NextResponse.json({ message: "Image uploaded successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error uploading image" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const { id, judul, subjudul, url } = await req.json();
  await pool.query(
    "update hero_program_kegiatan set judul=?, subjudul=?, url=? where id=?",
    [judul, subjudul, url, id]
  );
  return NextResponse.json({ id, judul, subjudul, url });
}

export async function DELETE(req) {
  const { id } = await req.json();
  await pool.query("delete from hero_program_kegiatan where id=?", [id]);
  return NextResponse.json({ message: "Data berhasil dihapus" });
}
