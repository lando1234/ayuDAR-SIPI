import { Post } from "@/code/db/Comedor.Model";
import { createPost } from "@/code/services/posts.service";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    // Extraer el comedorId de la URL
    const urlParts = req.url.split("/"); // Divide la URL en partes
    const comedorId = urlParts[urlParts.length - 2]; // El comedorId está antes de 'posts'
  
    if (!comedorId) {
      // Si no se encuentra el comedorId, retornar un error
      return NextResponse.json(
        { message: "Comedor ID no proporcionado en la URL" },
        { status: 400 }
      );
    }
  
    try {
      const { tipo, contenido, estado, titulo }: Post = await req.json(); // Obtener los datos del cuerpo de la solicitud
      console.log("Datos recibidos:", { tipo, contenido, estado, titulo }); // Log para depuración
  
      // Validación de los datos
      if (!tipo || !contenido || !estado || !titulo) {
        return NextResponse.json(
          { message: "Todos los campos son obligatorios" },
          { status: 400 }
        );
      }
  
      // Crear el nuevo post
      const newPost: Post = {
        tipo,
        fecha: new Date(),
        contenido,
        estado,
        titulo,
      };
  
      // Llamar al servicio para crear el post
      await createPost(comedorId, newPost);
  
      // Responder con el post creado
      return NextResponse.json(
        { message: "Post creado exitosamente", post: newPost },
        { status: 201 }
      );
    } catch (error) {
      console.error("Error al crear el post:", error); // Log para depuración
      if (error instanceof Error) {
        return NextResponse.json(
          {
            message: error.message || "Error al crear el post",
            error: error.name || "UnknownError",
          },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { message: "Error desconocido al crear el post" },
        { status: 400 }
      );
    }
  }