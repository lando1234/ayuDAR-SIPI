import ComedorModel, { IComedor } from "../db/Comedor.Model";
import connectDB from "../db/dbConnection";

export const getFullComedorProfile = async (id: number) => {
  await connectDB();
  const comedor = await ComedorModel.findOne({ id });

  if (!comedor) {
    throw new Error("Comedor no encontrado");
  }

  return comedor;
};

export const getComedorProfile = async (
  id: number
): Promise<IComedor | null> => {
  await connectDB();

  const comedor = await ComedorModel.findOne({ id }).select("-contactos");

  if (!comedor) {
    throw new Error("Comedor no encontrado");
  }

  return comedor;
};

export const updateComedorProfile = async (
  id: number,
  data: Partial<IComedor>
) => {
  await connectDB();

  const comedor = await ComedorModel.findOneAndUpdate(
    { id },
    {
      nombre: data.nombre,
      renacomID: data.renacomID,
      ubicacion: data.ubicacion,
      contacto: data.contacto,
      fotoPerfil: data.fotoPerfil,
      descripcion: data.descripcion,
      imagenes: data.imagenes,
    },
    { new: true }
  );

  if (!comedor) {
    throw new Error("Comedor no encontrado");
  }

  return comedor;
};
