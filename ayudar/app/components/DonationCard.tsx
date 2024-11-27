import React, { FC, useState } from "react";
import CheckIncompleto from "../icons/CheckIncompletoIcon.png";
import CheckCompleto from "../icons/CheckCompletoIcon.png";
import { Post } from "@/code/db/Comedor.Model";
import AlimentosImage from "../icons/AlimentosPequenaIcon.png";
import DonacionImage from "../icons/DineroIcon.png";
import IndumentariaImage from "../icons/IndumentariaPequenaIcon.png";
import VoluntariadoImage from "../icons/VoluntariadoPequenoIcon.png";
import { StaticImageData } from "next/image";
import { UpdatePostParams } from "@/code/services/posts.service";

export interface DonationCardProps {
  post: Post;
  comedor: {
    nombre: string;
    fotoPerfil: string;
  };
}

// Enum para los estados del post
enum PostEstado {
  Activo = "Activo",
  Completo = "Completo",
}

// Mapa de imágenes para los tipos de donación
const imageMap: Record<string, StaticImageData> = {
  Alimentos: AlimentosImage,
  Donacion: DonacionImage,
  Indumentaria: IndumentariaImage,
  Voluntariado: VoluntariadoImage,
};

const DonationCard: FC<DonationCardProps> = ({ post, comedor }) => {
  // Manejar el estado del post localmente
  const [postState, setPostState] = useState<Post>(post);
  // Maneja la acción de completar el post
  const onClickHandler = async () => {
    const session = sessionStorage.getItem("session");
    if( session ){
    const updated: UpdatePostParams = {

        comedorId: JSON.parse(session)._id,
        postId: post._id || 'undefined',
        tipo: post.tipo,
        contenido: post.contenido, 
        estado: PostEstado.Completo 
      };
      setPostState((prevState) => ({
        ...prevState,
        estado: PostEstado.Completo, // Actualiza el estado a "Completo"
      }));
      await fetch(`/api/posts`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updated),
      });
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-start">
      {/* Foto de perfil del comedor */}
      <img
        src={comedor.fotoPerfil || "/default-avatar.png"} // Imagen predeterminada si no hay foto
        alt={`Avatar de ${comedor.nombre}`}
        className="h-8 w-8 rounded-full mr-3 mt-2"
      />
      <div>
        {/* Título del post */}
        <h3 className="font-bold text-black">{postState.titulo}</h3>
        {/* Fecha y nombre del comedor */}
        <p className="text-xs text-[#919EAB]">
          {new Date(postState.fecha).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
          - {comedor.nombre}
        </p>

        {/* Estado del post */}
        <div className="flex items-center mt-2">
          <img
            src={
              postState.estado === PostEstado.Completo
                ? CheckCompleto.src
                : CheckIncompleto.src
            }
            alt={
              postState.estado === PostEstado.Completo
                ? "Estado completo"
                : "Estado incompleto"
            }
            className="h-4 w-4 mr-2"
          />
          <p
            className={`text-sm ${
              postState.estado === PostEstado.Completo
                ? "text-[#1E8F62]"
                : "text-[#6AB8E2]"
            }`}
          >
            {postState.estado === PostEstado.Completo
              ? "¡Meta completada!"
              : "Todavía puedes ayudar en este pedido"}
          </p>
        </div>

          {
          postState.estado === PostEstado.Activo?(
            <div className="flex items-center mt-2">

          <button
            onClick={onClickHandler}
            className="ml-4 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            Completar
          </button>
          </div>): null

          }


        {/* Contenido del post */}
        <div className="mt-2">
          <p className="text-sm text-[#1C252E]">{postState.contenido}</p>
          {/* Tipos de donación */}
          <div className="flex mt-2 space-x-2">
            {postState.tipo.map((tipo, index) => {
              const imageSrc = imageMap[tipo];
              return imageSrc ? (
                <img
                  key={index}
                  src={imageSrc.src}
                  alt={`Icono de ${tipo}`}
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