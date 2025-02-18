// app/api/kabar_terkini/[id]/route.js
import { NextResponse } from "next/server";
import pool from "../../../../../lib/db";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM kabar_terkini WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Berita tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching berita:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
