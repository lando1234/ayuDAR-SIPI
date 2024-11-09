import { eliminarComedor } from "@/code/services/comedor.service";
import { NextResponse } from "next/server";

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