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

export async function GET() {
  const [rows] = await pool.query("select * from visi_misi");
  return NextResponse.json(rows);
}

export async function POST(req) {
  const formData = await req.formData();
  const file1 = formData.get("file1");
  const visi = formData.get("visi");
  const file2 = formData.get("file2");
  const misi = formData.get("misi");

  if (!file1 || !visi || !file2 || !misi) {
    return NextResponse.json({ error: "Incomplete data" }, { status: 400 });
  }

  // Ubah file menjadi buffer
  const arrayBuffer1 = await file1.arrayBuffer();
  const buffer1 = Buffer.from(arrayBuffer1);
  const arrayBuffer2 = await file2.arrayBuffer();
  const buffer2 = Buffer.from(arrayBuffer2);

  // Tentukan nama file dan path
  const fileName1 = `${Date.now()}-${file1.name}`;
  const filePath1 = path.join(uploadDir, fileName1);
  const fileName2 = `${Date.now()}-${file2.name}`;
  const filePath2 = path.join(uploadDir, fileName2);

  // Tulis file ke direktori upload
  fs.writeFileSync(filePath1, buffer1);
  fs.writeFileSync(filePath2, buffer2);

  // Simpan URL dinamis untuk akses url
  const url1 = `/api/images/view/${fileName1}`;
  const url2 = `/api/images/view/${fileName2}`;

  try {
    await pool.query(
      "INSERT INTO visi_misi (visi, url1, url2, misi) VALUES (?, ?, ?, ?)",
      [visi, url1, url2, misi]
    );
    return NextResponse.json({ message: "Image uploaded successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error uploading image" },
      { status: 500 }
    );
  }
}

// PUT: Update data visi_misi berdasarkan id
export async function PUT(req) {
  const { id, visi, url1, misi, url2 } = await req.json();
  await pool.query(
    "UPDATE visi_misi SET visi=?, url1=?, misi=?, url2=? WHERE id=?",
    [visi, url1, misi, url2, id]
  );
  return NextResponse.json({
    id,
    visi,
    url1,
    misi,
    url2,
  });
}

// DELETE: Hapus data visi_misi berdasarkan id
export async function DELETE(req) {
  const { id } = await req.json();
  await pool.query("DELETE FROM visi_misi WHERE id=?", [id]);
  return NextResponse.json({ message: "Data berhasil dihapus" });
}
