import ComedorModel, { IComedor } from "../db/Comedor.Model";
import connectDB from "../db/dbConnection";

export const getFullComedorProfile = async (id: string) => {
  await connectDB();
  const comedor = await ComedorModel.findOne({id : parseInt(id)});

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

/**
 * Busca comedores por nombre.
 * @param nombre - El nombre o parte del nombre del comedor a buscar.
 * @returns Una lista de comedores que coinciden con el nombre.
 */
export const buscarComedoresPorNombre = async (
  nombre: string
): Promise<IComedor[]> => {
  await connectDB(); // Asegura la conexión a la base de datos
  try{
    if(nombre !== ''){
      return await ComedorModel.find({
        nombre: { $regex: nombre, $options: 'i' }, // Búsqueda insensible a mayúsculas
      });
    }
    else{
      return await ComedorModel.find();
    } 
  }
  catch (error) {
    throw new Error("Error al buscar los comedores");
  }
}

// Función para crear un nuevo comedor
export const crearComedor = async (comedorData: IComedor): Promise<IComedor> => {
  await connectDB(); // Asegura la conexión a la base de datos
  try {
    // Crea una nueva instancia del modelo Comedor con los datos proporcionados
    const nuevoComedor = new ComedorModel(comedorData);

    // Guardar el comedor en la base de datos
    await nuevoComedor.save();

    return nuevoComedor; // Devuelve el comedor creado
  } catch (error : any) {
    throw new Error(error.message || "Error al crear el comedor");
  }
};

// Eliminar un comedor por ID
export const eliminarComedor = async (id: string): Promise<boolean> => {
  await connectDB(); // Asegura la conexión a la base de datos
  try {
    // Buscar y eliminar el comedor
    console.log(id)
    const comedor = await ComedorModel.findOneAndDelete({ id: parseInt(id) });

    // Si no se encuentra el comedor, retornar false
    if (!comedor) {
      return false;
    }

    // Si se elimina correctamente, retornar true
    return true;
  } catch (error) {
    console.error("Error al eliminar el comedor:", error);
    throw new Error("Error al eliminar el comedor");
  }
};

export const getComedorById = async (id: number): Promise<IComedor | null> => {
  await connectDB(); // Asegura la conexión a la base de datos
  try {
    // Buscar el comedor en la base de datos por ID
    const comedor = await ComedorModel.findOne({ id });

    if (!comedor) {
      return null; // Si no se encuentra, devolver null
    }

    return comedor; // Si se encuentra, devolver el comedor
  } catch (error : any) {
    throw new Error(`Error al buscar el comedor: ${error.message}`);
  }
};