"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import AvatarUno from "../icons/AvatarUno.png";
import Vector from "../icons/Vector.png";
import phone from "../icons/phone.png";
import address from "../icons/address.png";
import mail from "../icons/mail.png";
import DonationSection from "../components/DonationSection";
import CreatePostCard from "../components/CreatePostCard";
import { FiEdit2, FiCheck, FiX } from "react-icons/fi"; // Iconos para editar y guardar/cancelar


const ComedorPaginaInstitucional_perfil = () => {
  const [comedorData, setComedorData] = useState({
    name: "Comedor granito de arena",
    location: "Luján, Buenos Aires",
    address: "Lima 555",
    phone: "01123567890",
    email: "info@granito.com",
    description:
      "Somos una organización comunitaria dedicada a brindar asistencia alimentaria a personas en situación de vulnerabilidad. Estamos ubicados en una zona de alto riesgo social. Buscamos ofrecer una comida nutritiva y un espacio de contención a quienes más lo necesitan.",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setComedorData((prevData) => ({ ...prevData, [name]: value }));
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
              src={AvatarUno.src}
              alt="Avatar Uno"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={comedorData.name}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <h1 className="text-lg font-medium text-black">
                {comedorData.name}
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
                value={comedorData.location}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <span>{comedorData.location}</span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src={address.src} alt="Address" className="w-4 h-4" />
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={comedorData.address}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <span>{comedorData.address}</span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src={phone.src} alt="Phone" className="w-4 h-4" />
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={comedorData.phone}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <span>{comedorData.phone}</span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src={mail.src} alt="Mail" className="w-4 h-4" />
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={comedorData.email}
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <span>{comedorData.email}</span>
            )}
          </div>
        </div>

        {/* Descripción */}
        <div className="mt-4">
          {isEditing ? (
            <textarea
              name="description"
              value={comedorData.description}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none"
              rows={3}
            />
          ) : (
            <p className="text-sm text-gray-600">{comedorData.description}</p>
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
        <CreatePostCard />

        {/* Sección de Actividad */}
        <div className="space-y-2 mt-4">
          <h2 className="text-lg text-gray-500">Actividad</h2>
          <DonationSection />
        </div>
      </div>
    </div>
  );
};

export default ComedorPaginaInstitucional_perfil;
