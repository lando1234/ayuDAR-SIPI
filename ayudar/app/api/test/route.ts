// pages/api/test-connection.ts
import connectDB from "../../../code/db/dbConnection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json(
      { message: "Conexión exitosa a MongoDB" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al conectar a MongoDB" },
      { status: 500 }
    );
  }
}
