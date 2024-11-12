// app/api/authenticate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { authenticateUser } from "../../../code/services/auth.service";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Validación básica
  if (!email || !password) {
    return NextResponse.json(
      { error: "Email y contraseña son requeridos" },
      { status: 400 }
    );
  }

  try {
    const response = await authenticateUser(email, password);

    // Autenticación exitosa
    return NextResponse.json(
      { message: "Autenticación exitosa", comedor: response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al autenticar:", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
