import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

// Forzar eliminación del modelo si ya existe (usado solo en desarrollo)
if (mongoose.models.Comedor) {
  delete mongoose.models.Comedor;
}

interface Ubicacion {
  provincia: string;
  codigoPostal: string;
  localidad: string;
  domicilio: string;
}

interface Contacto {
  tel: string;
  facebook?: string;
  instagram?: string;
  web?: string;
}

export interface Post {
  tipo: string[];
  fecha: Date;
  contenido: string;
  estado: string;
  titulo: string;
}

interface ContactoMensaje {
  mail: string;
  fecha: Date;
  texto: string;
}

export interface IComedor extends Document {
  id : number;
  email: string;
  pass: string;
  nombre: string;
  renacomID: number;
  ubicacion: Ubicacion;
  contacto: Contacto;
  fotoPerfil: string;
  descripcion: string;
  imagenes: string[];
  posts: Post[];
  contactos: ContactoMensaje[];
}

const ubicacionSchema = new Schema<Ubicacion>({
  provincia: { type: String, required: true },
  codigoPostal: { type: String, required: true },
  localidad: { type: String, required: true },
  domicilio: { type: String, required: true },
});

const contactoSchema = new Schema<Contacto>({
  tel: { type: String, required: true },
  facebook: { type: String },
  instagram: { type: String },
  web: { type: String },
});

const postSchema = new Schema<Post>({
  tipo: { type: [String], required: true },
  fecha: { type: Date, required: true },
  contenido: { type: String, required: true },
  estado: { type: String, required: true },
  titulo: { type: String },
});

const contactoMensajeSchema = new Schema<ContactoMensaje>({
  mail: { type: String, required: true },
  fecha: { type: Date, required: true },
  texto: { type: String, required: true },
});

// Esquema del modelo de Comedor
const ComedorSchema = new Schema<IComedor>(
  {
    id: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    nombre: { type: String, required: true },
    renacomID: { type: Number, required: true },
    ubicacion: { type: ubicacionSchema, required: true },
    contacto: { type: contactoSchema, required: true },
    fotoPerfil: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagenes: { type: [String], required: true },
    posts: { type: [postSchema], required: true },
    contactos: { type: [contactoMensajeSchema], required: true },
  },
  { timestamps: true }
); // Agrega marcas de tiempo (createdAt, updatedAt)

// Middleware para hashear la contraseña antes de guardarla
ComedorSchema.pre<IComedor>("save", async function (next) {
  if (this.isModified("pass")) {
    this.pass = await bcrypt.hash(this.pass, 10);
  }
  next();
});

// Exportar el modelo, verificando si ya existe
export default mongoose.models.Comedor ||
  mongoose.model<IComedor>("Comedor", ComedorSchema);
