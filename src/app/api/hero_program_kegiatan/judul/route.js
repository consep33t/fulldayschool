import pool from "../../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");

  if (!search) {
    return NextResponse.json(
      { error: "Parameter search tidak ditemukan" },
      { status: 400 }
    );
  }

  try {
    const [rows] = await pool.query(
      "SELECT * FROM hero_program_kegiatan WHERE judul LIKE ?",
      [`%${search}%`]
    );
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
