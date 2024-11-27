import { FC, useState } from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { IComedor } from "@/code/db/Comedor.Model";

type PostTipo = "Alimentos" | "Donacion" | "Indumentaria" | "Voluntariado";

export interface CreatePostCardProps {
  comedorData: IComedor | undefined;
  setComedorData: React.Dispatch<React.SetStateAction<IComedor | undefined>>;
}

const CreatePostCard: FC<CreatePostCardProps> = ({
  comedorData,
  setComedorData,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedDonationTypes, setSelectedDonationTypes] = useState<
    PostTipo[]
  >([]);
  const postTipos: PostTipo[] = [
    "Alimentos",
    "Donacion",
    "Indumentaria",
    "Voluntariado",
  ];

  // Función para manejar el cambio en los checkboxes
  const handleCheckboxChange = (tipo: PostTipo) => {
    setSelectedDonationTypes((prevSelected) => {
      if (prevSelected.includes(tipo)) {
        return prevSelected.filter((item) => item !== tipo);
      } else {
        return [...prevSelected, tipo];
      }
    });
  };

  // Función para manejar la publicación del post
  const handlePostSubmit = async () => {
    if (title.trim() && content.trim()) {
      const currentDate = new Date().toISOString(); // Fecha en formato ISO

      // Crear el objeto del post
      const newPost = {
        titulo: title,
        tipo: selectedDonationTypes,
        fecha: currentDate,
        contenido: content,
        estado: "Activo", // Puedes ajustar el estado como "Activo" o el que prefieras
      };

      try {
        // Llamada a la API para crear el post
        const response = await fetch(`/api/comedor/${comedorData?._id}/posts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        });

        if (response.ok) {
          const createdPost = await response.json();
          console.log("Post creado exitosamente");
          // Actualiza el estado de comedorData para incluir el nuevo post
          setComedorData((prevComedorData) => {
            if (!prevComedorData) return prevComedorData;
        
            // Clonamos prevComedorData manteniendo las propiedades específicas de Mongoose
            const updatedComedorData = Object.assign(Object.create(Object.getPrototypeOf(prevComedorData)), prevComedorData);
        
            // Actualizamos el array de posts
            updatedComedorData.posts = [...updatedComedorData.posts, createdPost.post];
        
            return updatedComedorData as IComedor;
          });
          // Limpiar los campos después de crear el post
          setTitle("");
          setContent("");
          setSelectedDonationTypes([]);
        } else {
          console.error("Error al crear el post");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    } else {
      console.log("El título y el contenido son obligatorios");
    }
  };

  return (
    <div>
      {/* Formulario para crear un post */}
      <div className="bg-white p-4 rounded-lg shadow-md border flex flex-col gap-4 mb-4">
        {/* Header: Avatar y nombre */}
        <div className="flex items-center gap-3">
          <img
            src={comedorData?.fotoPerfil}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h3 className="font-medium text-gray-800">{comedorData?.nombre}</h3>
        </div>

        {/* Título */}
        <input
          type="text"
          placeholder={isFocused ? "" : "Escribe el título..."}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 ${
            isFocused ? "text-black" : "text-gray-500"
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Tipo de donación */}
        <div className="space-y-2">
          <h2 className="text-lg text-gray-500">
            Seleccionar tipo de donación
          </h2>
          {postTipos.map((tipo) => (
            <div key={tipo} className="flex items-center">
              <input
                type="checkbox"
                id={tipo}
                value={tipo}
                checked={selectedDonationTypes.includes(tipo)}
                onChange={() => handleCheckboxChange(tipo)}
                className="mr-2"
              />
              <label htmlFor={tipo} className="text-gray-700">
                {tipo}
              </label>
            </div>
          ))}
        </div>

        {/* Área de contenido */}
        <div className="border rounded-lg p-2">
          <textarea
            className={`w-full p-2 resize-none focus:outline-none ${
              isFocused ? "text-black" : "text-gray-500"
            }`}
            rows={3}
            placeholder={isFocused ? "" : "Haz tu pedido a la comunidad"}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        {/* Área de controles */}
        <div className="flex items-center justify-between mt-2">
          <AiOutlineFileImage className="text-xl cursor-pointer" />
          <button
            onClick={handlePostSubmit} // Llamamos a la función cuando se hace clic en el botón
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Publicar <IoMdSend />
          </button>
        </div>
      </div>{" "}
      {/* Aquí cierra el div de formulario */}
    </div>
  );
};

export default CreatePostCard;
