import ComedorModel, { IComedor, Post } from "../db/Comedor.Model";
import connectDB from "../db/dbConnection";

export const getAllPosts = async () => {
  await connectDB();
  const comedores = await ComedorModel.find({}, "posts");
  return comedores.flatMap((comedor) => comedor.posts);
};


// Servicio para crear un post
export const createPost = async (comedorId: string, postData: Post): Promise<IComedor> => {
  try {
    await connectDB();
    // Buscar el comedor por su ID
    const comedor = await ComedorModel.findById(comedorId);

    // Verifica si el comedor existe
    if (!comedor) {
      const errorMessage = `Comedor con ID ${comedorId} no encontrado`;
      console.error(errorMessage);
      throw new Error(errorMessage); // Lanza un error con un mensaje más detallado
    }

    // Verifica si los datos del post son válidos
    if (!postData || !postData.titulo || !postData.contenido) {
      const errorMessage = 'Datos del post incompletos o inválidos';
      console.error(errorMessage);
      throw new Error(errorMessage); // Lanza un error si los datos no son válidos
    }

    // Agregar el post al array de posts del comedor
    comedor.posts.push(postData);

    console.log(JSON.stringify(postData));
    // Guardar el comedor con el nuevo post
    await comedor.save();

    return comedor; // Retorna el comedor actualizado
  } catch (error) {
    // Manejo detallado del error
    if (error instanceof Error) {
      console.error("Error al crear el post:", error.message, error.stack); // Log más detallado
      throw new Error(`Error al crear el post: ${error.message}`);
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido al crear el post");
    }
  }
};
export interface UpdatePostParams {
  comedorId: string;
  postId: string; // ID del post a actualizar
  tipo?: string[]; // Opcional: Nuevos tipos
  contenido?: string; // Opcional: Nuevo contenido
  estado?: string; // Opcional: Nuevo estado
}

export const updateComedorPost = async ({
  comedorId,
  postId,
  tipo,
  contenido,
  estado,
}: UpdatePostParams) => {
  try {
    // Conectar a la base de datos
    await connectDB();

    // Construir el objeto de actualización dinámicamente
    const updateFields: any = {};
    if (tipo) updateFields["posts.$.tipo"] = tipo;
    if (contenido) updateFields["posts.$.contenido"] = contenido;
    if (estado) updateFields["posts.$.estado"] = estado;

    // Actualizar el post del comedor
    const updatedComedor = await ComedorModel.findOneAndUpdate(
      { _id: comedorId, "posts._id": postId }, // Encuentra el comedor y el post por ID
      { $set: updateFields }, // Actualiza los campos necesarios
      { new: true } // Retorna el documento actualizado
    );

    // Manejar el caso donde no se encontró el comedor o el post
    if (!updatedComedor) {
      throw new Error("Comedor o post no encontrado");
    }

    return updatedComedor;
  } catch (error: any) {
    console.error("Error al actualizar el post del comedor:", error.message);
    throw new Error(`Error al actualizar el post: ${error.message}`);
  }
};
export const deletePost = async (id: number, fecha: Date) => {
  await connectDB();

  const comedor = await ComedorModel.findOneAndUpdate(
    { id },
    { $pull: { posts: { fecha } } },
    { new: true }
  );

  if (!comedor) {
    throw new Error("Comedor o post no encontrado");
  }

  return comedor;
};

export async function getPostsWithComedorName() {
  try {
    await connectDB();
    const result = await ComedorModel.find(
      { posts: { $exists: true, $ne: [] } }, // Filtra solo los comedores que tienen posts
      { nombre: 1, posts: 1 } // Proyecta solo el campo 'nombre' y 'posts'
    ).exec();

    return result;
  } catch (error) {
    console.error("Error al obtener los posts con el nombre del comedor:", error);
    throw error;
  }
}

export const getPostsWithComedorNames = async () => {
  try {
    await connectDB();
    const result = await ComedorModel.aggregate([
      // Filtra solo los comedores que tienen posts
      { $match: { posts: { $exists: true, $ne: [] } } },

      // Descompone el array de posts para obtener un documento por cada post
      { $unwind: "$posts" },

      // Proyecta los campos necesarios: datos del post y nombre del comedor
      {
        $project: {
          _id: 0, // omite el _id del comedor
          post: "$posts", // asigna el contenido de posts al campo "post"
          comedor: { // agrega un nuevo campo llamado "comedor" con nombre y fotoPerfil
            nombre: "$nombre",
            fotoPerfil: "$fotoPerfil"
          }
        }
      },

      // Ordena los posts por fecha (ajusta "fecha" al nombre correcto del campo)
      { $sort: { "post.fecha": -1 } } // 1 para ascendente, -1 para descendente
    ]);

    return { success: true, data: result };
  } catch (error) {
    console.error("Error al obtener los posts con nombre del comedor:", error);
    return { success: false, message: "Error en el servidor" };
  }
};
