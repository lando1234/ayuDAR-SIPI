// db.ts
import mongoose from "mongoose";

const uri: string =
  "mongodb+srv://ayudar:Gz601wXpMe5IZ5kO@ayudar.rvpsx.mongodb.net/?retryWrites=true&w=majority&appName=Ayudar";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error(
      "Error al conectar a MongoDB:",
      error instanceof Error ? error.message : error
    );
    throw error;
  }
};

export default connectDB;
