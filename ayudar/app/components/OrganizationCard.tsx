import { FC } from "react";
import { useRouter } from "next/navigation";
import Vector from "../icons/Vector.png";
import { IComedor } from "@/code/db/Comedor.Model";
import NotFoundImage from '../images/notFoundImg.jpg';

type OrganizationCardProps = Pick<
  IComedor,
  "fotoPerfil" | "nombre" | "descripcion" | "ubicacion"
> & { id: string }; // Agrega `id` aquí

const OrganizationCard: FC<OrganizationCardProps> = ({
  id,
  fotoPerfil,
  nombre,
  descripcion,
  ubicacion,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/comedor/${id}`); // Navega a la página del comedor usando la `id`
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-start cursor-pointer" onClick={handleClick}>
      <img
        src={fotoPerfil}
        alt="fotoPerfil"
        className="h-8 mr-3 mt-2"
        onError={(e) => {
          e.currentTarget.src = NotFoundImage.src; // Imagen de respaldo
        }}
      />
      <div>
        <h3 className="font-bold text-black">{nombre}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>
            <img
              src={Vector.src}
              alt="Location"
              className="w-full h-full object-cover"
            />
          </span>
          <span>
            {ubicacion.localidad}, {ubicacion.provincia}
          </span>
        </div>
        <div className="mt-2">
          <p className="text-sm text-[#1C252E]">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;