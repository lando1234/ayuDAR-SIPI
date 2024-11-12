import { buscarComedoresPorNombre, crearComedor } from "@/code/services/comedor.service";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  //Obtiene el paramtro nombre de la url
  const nombre = searchParams.get('nombre') || '';

  try {
    console.log("Nombre buscado: " + nombre);
    const comedores = await buscarComedoresPorNombre(nombre);
    return NextResponse.json(comedores);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}


export async function POST(req: Request) {
  // Crear un nuevo comedor
  try {
    const newComedor = await req.json();
    const comedorCreado = await crearComedor(newComedor);
    return NextResponse.json(comedorCreado, { status: 201 });
  } catch (error) {
    console.error("Error al crear el comedor:", error); // Agregar un log para depuración
    if (error instanceof Error) {
      // Verifica que el mensaje exista y proporciona un mensaje más descriptivo
      return NextResponse.json({
        message: error.message || "Error al crear el comedor",
        error: error.name || "UnknownError", // Añade el tipo de error para más contexto
      }, { status: 400 });
    }
    // Si el error no es una instancia de Error, manejarlo de manera genérica
    return NextResponse.json({
      message: "Error desconocido al crear el comedor",
    }, { status: 400 });
  }
}

