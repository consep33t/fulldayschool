import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

// Tentukan direktori upload
const uploadDir = path.join(process.cwd(), "upload");

// Pastikan folder upload ada
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// GET: Semua gambar
export async function GET() {
  try {
    const [rows] = await pool.query("select * from images");
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching images" },
      { status: 500 }
    );
  }
}

// POST: Upload gambar baru
export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");
  const namaFoto = formData.get("namaFoto");

  if (!file || !namaFoto) {
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

  // Simpan URL dinamis untuk akses gambar
  const url = `/api/images/view/${fileName}`;

  try {
    await pool.query("insert into images (namaFoto, url) values (?, ?)", [
      namaFoto,
      url,
    ]);
    return NextResponse.json({ message: "Image uploaded successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error uploading image" },
      { status: 500 }
    );
  }
}
