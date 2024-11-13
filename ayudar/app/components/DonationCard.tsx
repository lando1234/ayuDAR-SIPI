// components/DonationCard.tsx
import { FC } from "react";
import CheckIncompleto from "../icons/CheckIncompletoIcon.png";
import CheckCompleto from "../icons/CheckCompletoIcon.png";
import { Post } from "@/code/db/Comedor.Model";
import AlimentosImage from "../icons/AlimentosPequenaIcon.png";
import DonacionImage from "../icons/DineroIcon.png";
import IndumentariaImage from "../icons/IndumentariaPequenaIcon.png";
import VoluntariadoImage from "../icons/VoluntariadoPequenoIcon.png";
import { StaticImageData } from "next/image";

export interface DonationCardProps {
  post: Post;
  comedor: {
    nombre: string;
    fotoPerfil: string;
  };
}

// Mapea los tipos a las imágenes, permitiendo cualquier cadena como clave
const imageMap: { [key: string]: StaticImageData } = {
  Alimentos: AlimentosImage,
  Donacion: DonacionImage,
  Indumentaria: IndumentariaImage,
  Voluntariado: VoluntariadoImage,
};

const DonationCard: FC<DonationCardProps> = ({ post, comedor }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-start">
      <img src={comedor.fotoPerfil} alt="Avatar" className="h-8 mr-3 mt-2" />
      <div>
        <h3 className="font-bold text-black">{post.titulo}</h3>
        <p className="text-xs text-[#919EAB]">
          {new Date(post.fecha).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
          - {comedor.nombre}
        </p>
        <div className="flex items-center mt-2">
          <img
            src={
              post.estado != "Activo" ? CheckCompleto.src : CheckIncompleto.src
            }
            alt={
              post.estado != "Activo" ? "Check Completo" : "Check Incompleto"
            }
            className="h-4 w-4 mr-2"
          />
          <p
            className={`text-sm ${
              post.estado != "Activo" ? "text-[#1E8F62]" : "text-[#6AB8E2]"
            }`}
          >
            {post.estado != "Activo"
              ? "¡Meta completada!"
              : "Todavía podes ayudar en este pedido"}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-sm text-[#1C252E]">{post.contenido}</p>
          <div className="flex mt-2 space-x-2">
            {post.tipo.map((tipo, index) => {
              const imageSrc = imageMap[tipo] || ""; // Si no se encuentra, puedes dejarlo vacío o agregar una imagen por defecto

              return imageSrc ? (
                <img
                  key={index}
                  src={imageSrc.src}
                  alt={tipo}
                  className="h-7 w-7"
                />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
