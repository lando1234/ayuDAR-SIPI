import ComedorModel, { IComedor, Post } from "../db/Comedor.Model";
import connectDB from "../db/dbConnection";

export const getAllPosts = async () => {
  await connectDB();
  const comedores = await ComedorModel.find({}, "posts");
  return comedores.flatMap((comedor) => comedor.posts);
};

export const createPost = async (
  id: number,
  post: Post
): Promise<IComedor | null> => {
  await connectDB();

  const comedor = await ComedorModel.findOneAndUpdate(
    { id },
    { $push: { posts: post } },
    { new: true } // Devuelve el documento actualizado
  );

  if (!comedor) {
    throw new Error("Comedor no encontrado");
  }

  return comedor;
};

export const updatePost = async (
  id: number,
  fecha: Date,
  tipo: string[],
  contenido: string,
  estado: string
) => {
  await connectDB();

  const comedor = await ComedorModel.findOneAndUpdate(
    { id, "posts.fecha": fecha },
    {
      $set: {
        "posts.$.tipo": tipo,
        "posts.$.contenido": contenido,
        "posts.$.estado": estado,
      },
    },
    { new: true }
  );

  if (!comedor) {
    throw new Error("Comedor o post no encontrado");
  }

  return comedor;
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
            nombreComedor: "$nombre",
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
