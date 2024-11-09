import { eliminarComedor, getComedorById, updateComedorProfile } from "@/code/services/comedor.service";
import { NextRequest, NextResponse } from "next/server";

// Método GET para obtener los datos de un comedor por su ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
      const id = Number(params.id); // Convertir el ID de la URL a número
  
      if (isNaN(id)) {
        return NextResponse.json(
          { message: "El ID proporcionado no es válido." },
          { status: 400 }
        );
      }
  
      // Llamar al servicio para obtener el comedor con el ID
      const comedor = await getComedorById(id);
  
      if (!comedor) {
        return NextResponse.json(
          { message: "Comedor no encontrado" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(comedor, { status: 200 });
    } catch (error) {
      if(error instanceof Error){
        return NextResponse.json(
          { message: "Error al obtener el comedor", error: error.message },
          { status: 500 }
        );
      }
    }
  }

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
      // Llamamos al servicio de eliminar el comedor
      console.log("Id comedor: " + params.id)
      const eliminado = await eliminarComedor(params.id);
  
      if (!eliminado) {
        // Si no se encuentra el comedor, respondemos con un 404
        return NextResponse.json(
          { message: "Comedor no encontrado" },
          { status: 404 }
        );
      }
  
      // Si se elimina correctamente, respondemos con un 200
      return NextResponse.json(
        { message: "Comedor eliminado correctamente" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      // En caso de error en la eliminación, respondemos con un 500
      return NextResponse.json(
        { message: "Error al eliminar el comedor" },
        { status: 500 }
      );
    }
  }


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
      const id = parseInt(params.id, 10); // Convierte el id de string a número
      if (isNaN(id)) {
        return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
      }
  
      // Lee el cuerpo de la solicitud
      const data = await request.json();
  
      // Llama al servicio para actualizar el comedor
      const updatedComedor = await updateComedorProfile(id, data);
  
      return NextResponse.json(updatedComedor, { status: 200 });
    } catch (error) {
      if(error instanceof Error){
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }
  }