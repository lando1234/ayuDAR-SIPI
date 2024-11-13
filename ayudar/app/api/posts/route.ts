import { updatePost, deletePost, getPostsWithComedorNames } from "@/code/services/posts.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await getPostsWithComedorNames();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || "Error al obtener posts" }, { status: 500 });
    }
  }
}


export async function PUT(req: NextRequest) {
  try {
    const { id, fecha, tipo, contenido, estado } = await req.json();
    const comedorActualizado = await updatePost(id, new Date(fecha), tipo, contenido, estado);
    return NextResponse.json(comedorActualizado, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || "Error al actualizar el post" }, { status: 400 });
    }
  }
}

// Endpoint para eliminar un post (DELETE)
export async function DELETE(req: NextRequest) {
  try {
    const { id, fecha } = await req.json();
    const comedorActualizado = await deletePost(id, new Date(fecha));
    return NextResponse.json(comedorActualizado, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || "Error al eliminar el post" }, { status: 400 });
    }
  }
}
