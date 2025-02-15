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

// GET: Ambil semua data kurikulum
export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM kurikulum");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching kurikulum:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}

// POST: Tambah data baru ke tabel kurikulum
export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");
  const judul = formData.get("judul");
  const deskripsi = formData.get("deskripsi");

  if (!file || !judul || !deskripsi) {
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

  // Simpan URL dinamis untuk akses url gambar
  const url = `/api/images/view/${fileName}`;

  try {
    await pool.query(
      "INSERT INTO kurikulum (judul, deskripsi, url) VALUES (?, ?, ?)",
      [judul, deskripsi, url]
    );
    return NextResponse.json({ message: "Data added successfully" });
  } catch (error) {
    console.error("Error adding data:", error);
    return NextResponse.json({ error: "Error adding data" }, { status: 500 });
  }
}

// PUT: Update data kurikulum berdasarkan id
export async function PUT(req) {
  const formData = await req.formData();
  const id = formData.get("id");
  const judul = formData.get("judul");
  const deskripsi = formData.get("deskripsi");
  const file = formData.get("file");

  if (!id || !judul || !deskripsi) {
    return NextResponse.json({ error: "Incomplete data" }, { status: 400 });
  }

  let url = formData.get("url"); // Gunakan URL lama jika tidak ada file baru

  if (file) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Tentukan nama file dan path
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, fileName);

    // Tulis file ke direktori upload
    fs.writeFileSync(filePath, buffer);

    // Simpan URL baru untuk akses gambar
    url = `/api/images/view/${fileName}`;
  }

  try {
    await pool.query(
      "UPDATE kurikulum SET judul=?, deskripsi=?, url=? WHERE id=?",
      [judul, deskripsi, url, id]
    );
    return NextResponse.json({ message: "Data updated successfully" });
  } catch (error) {
    console.error("Error updating data:", error);
    return NextResponse.json({ error: "Error updating data" }, { status: 500 });
  }
}

// DELETE: Hapus data kurikulum berdasarkan id
export async function DELETE(req) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "ID not provided" }, { status: 400 });
  }

  try {
    // Cari URL gambar berdasarkan ID
    const [rows] = await pool.query("SELECT url FROM kurikulum WHERE id=?", [
      id,
    ]);
    if (rows.length > 0) {
      const fileUrl = rows[0].url;
      const fileName = fileUrl.split("/").pop();
      const filePath = path.join(uploadDir, fileName);

      // Hapus file dari direktori upload
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    // Hapus data dari database
    await pool.query("DELETE FROM kurikulum WHERE id=?", [id]);
    return NextResponse.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    return NextResponse.json({ error: "Error deleting data" }, { status: 500 });
  }
}
