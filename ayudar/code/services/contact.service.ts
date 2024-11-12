import ComedorModel, { IComedor } from "../db/Comedor.Model";
import connectDB from "../db/dbConnection";

interface ContactoMensaje {
  mail: string;
  fecha: Date;
  texto: string;
}

// Servicio para agregar un nuevo contacto al comedor
export const addContactoToComedor = async (
  id: number,
  contacto: ContactoMensaje
): Promise<IComedor | null> => {
  await connectDB();

  const comedor = await ComedorModel.findOneAndUpdate(
    { id },
    { $push: { contactos: contacto } },
    { new: true } // Devuelve el documento actualizado
  );

  if (!comedor) {
    throw new Error("Comedor no encontrado");
  }

  return comedor;
};
