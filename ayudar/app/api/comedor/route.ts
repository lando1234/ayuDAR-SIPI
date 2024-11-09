import { buscarComedoresPorNombre, crearComedor, eliminarComedor } from "@/code/services/comedor.service";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    //Obtiene el paramtro nombre de la url
    const nombre = searchParams.get('nombre') || '';
  
    try {
      console.log("Nombre buscado: " + nombre);
      const comedores = await buscarComedoresPorNombre(nombre);
      return NextResponse.json(comedores);
    } catch (error : any) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }


export async function POST(req: Request) {
    // Crear un nuevo comedor
    try {
      const newComedor = await req.json();
      const comedorCreado = await crearComedor(newComedor);
      return NextResponse.json(comedorCreado, { status: 201 });
    } catch (error : any) {
      return NextResponse.json({ message: error.message || "Error al crear el comedor" }, { status: 400 });
    }
}

