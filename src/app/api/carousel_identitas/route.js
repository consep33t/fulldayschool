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
    const [rows] = await pool.query("SELECT * FROM carousel_identitas");
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching carousel_identitas" },
      { status: 500 }
    );
  }
}

// POST: Upload gambar baru
export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");
  const nama = formData.get("nama");

  if (!file || !nama) {
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
    await pool.query(
      "INSERT INTO carousel_identitas (nama, url) VALUES (?, ?)",
      [nama, url]
    );
    return NextResponse.json({ message: "Image uploaded successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error uploading image" },
      { status: 500 }
    );
  }
}

// DELETE: Hapus gambar berdasarkan ID
export async function DELETE(req) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    // Dapatkan URL gambar berdasarkan ID
    const [rows] = await pool.query(
      "SELECT url FROM carousel_identitas WHERE id = ?",
      [id]
    );
    if (rows.length === 0) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const imageUrl = rows[0].url;
    const fileName = path.basename(imageUrl);
    const filePath = path.join(uploadDir, fileName);

    // Hapus file dari direktori upload
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Hapus data dari database
    await pool.query("DELETE FROM carousel_identitas WHERE id = ?", [id]);

    return NextResponse.json({ message: "Image deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting image" },
      { status: 500 }
    );
  }
}
