"use client"; // Añadir esta línea para que el componente sea un Client Component
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DonationSection from "../components/DonationSection";
import CreatePostCard from "../components/CreatedPostCard";
import Vector from "../icons/Vector.png";
import phone from "../icons/phone.png";
import address from "../icons/address.png";
import mail from "../icons/mail.png";
import { FiCheck, FiEdit2, FiX } from "react-icons/fi";
import Header from "../components/Header";
import { IComedor } from "@/code/db/Comedor.Model";

const MyProfile = () => {
  const router = useRouter();
  useEffect(() => {
    const session = sessionStorage.getItem("session");
    if (!session) {
      router.push("/login");
    } else {
      fetchComedorData(JSON.parse(session)._id);
    }
  }, [router]);

  const fetchComedorData = async (id: string) => {
    try {
      const response = await fetch(`/api/comedor/${id}`);
      if (response.ok) {
        const data = await response.json();
        setComedorData(data);
      } else {
        console.error("Error al obtener los datos del comedor");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const [comedorData, setComedorData] = useState<IComedor>();

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setComedorData(
      (prevData) =>
        ({
          ...prevData,
          [name]: value,
        } as IComedor)
    );
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    console.log("Datos guardados:", comedorData);
    setIsEditing(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-screen-lg mx-4 mt-8 p-6 bg-white rounded-lg shadow-md">
        {/* Encabezado */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={comedorData?.fotoPerfil}
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={comedorData?.nombre}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <h1 className="text-lg font-medium text-black">
                {comedorData?.nombre}
              </h1>
            )}

            <FiEdit2
              className="text-gray-600 cursor-pointer"
              onClick={toggleEdit}
            />
          </div>
        </div>

        {/* Información de contacto */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src={Vector.src} alt="Location" className="w-4 h-4" />
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={comedorData?.ubicacion.provincia}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <span>{comedorData?.ubicacion.provincia}, {comedorData?.ubicacion.localidad}</span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src={address.src} alt="Address" className="w-4 h-4" />
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={comedorData?.ubicacion.domicilio}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <span>{comedorData?.ubicacion.domicilio}</span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src={phone.src} alt="Phone" className="w-4 h-4" />
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={comedorData?.contacto.tel}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <span>{comedorData?.contacto.tel}</span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src={mail.src} alt="Mail" className="w-4 h-4" />
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={comedorData?.email}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <span>{comedorData?.email}</span>
            )}
          </div>
        </div>

        {/* Descripción */}
        <div className="mt-4">
          {isEditing ? (
            <textarea
              name="description"
              value={comedorData?.descripcion}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none"
              rows={3}
            />
          ) : (
            <p className="text-sm text-gray-600">{comedorData?.descripcion}</p>
          )}
        </div>

        {/* Botones Estéticos */}
        {isEditing && (
          <div className="mt-4 flex gap-2 justify-end">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md 
                         hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <FiCheck /> Guardar
            </button>
            <button
              onClick={toggleEdit}
              className="flex items-center gap-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md 
                         hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <FiX /> Cancelar
            </button>
          </div>
        )}

        <hr className="my-6 border-gray-200" />
        
        {/* Nueva publicación */}
        {comedorData? 
        <CreatePostCard comedorData={comedorData} setComedorData={setComedorData}/> : null}

        {/* Sección de Actividad */}
        <div className="space-y-2 mt-4">
          <h2 className="text-lg text-gray-500">Actividad</h2>
          {comedorData?.posts && comedorData?.posts.length > 0 ? (
            <DonationSection posts={comedorData.posts} comedor={comedorData} />
          ) : (
            <p>No hay actividad disponible.</p> // Mensaje de fallback en caso de que no haya posts
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
