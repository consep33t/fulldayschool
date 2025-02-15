import pool from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const [rows] = await pool.query("select * from map");
  return NextResponse.json(rows);
}

export async function POST(request) {
  const { url } = await request.json();
  const [result] = await pool.query("insert into map (url) VALUES (?)", [url]);
  return NextResponse.json({
    id: result.insertId,
    url,
  });
}

export async function PUT(request) {
  const { id, url } = await request.json();
  await pool.query("update map set url=? where id=?", [url, id]);
  return NextResponse.json({ id, url });
}

export async function DELETE(request) {
  const { id } = await request.json();
  await pool.query("delete from map where id=?", [id]);
  return NextResponse.json({ message: "Data berhasil dihapus" });
}
