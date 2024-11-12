import ComedorModel from "../db/Comedor.Model";
import connectDB from "../db/dbConnection";
import bcrypt from "bcrypt";

export const authenticateUser = async (email: string, password: string) => {
  await connectDB();
  const comedor = await ComedorModel.findOne({ email });

  if (!comedor) {
    throw new Error("Comedor no encontrado");
  }
  const isMatch = await bcrypt.compare(password, comedor.pass);
  if (!isMatch) {
    throw new Error("Credenciales incorrectas");
  }

  return comedor;
};
