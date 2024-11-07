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
