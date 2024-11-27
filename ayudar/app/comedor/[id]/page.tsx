"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { IComedor, Post } from "@/code/db/Comedor.Model";
import React from "react";
import Vector from "../../icons/Vector.png";
import phone from "../../icons/phone.png";
import address from "../../icons/address.png";
import mail from "../../icons/mail.png";
import Header from "@/app/components/Header";
import DonationSection from "@/app/components/DonationSection";

const ComedorPaginaInstitucional_perfil = () => {
  const { id } = useParams();

  const [comedorData, setComedorData] = useState<IComedor>();

  useEffect(() => {
    const fetchComedorData = async () => {
      if (!id) return; // Asegura que el id esté disponible
      try {
        const response = await fetch(`/api/comedor/${id}`);
        if (response.ok) {
          const data = await response.json();
          // Ordenamos los posts por fecha (de más reciente a más antiguo)
          const sortedPosts = data.posts.sort((a: Post, b: Post) => {
            return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
          });

          // Actualizamos el estado con los datos ordenados
          setComedorData({ ...data, posts: sortedPosts });
        } else {
          console.error("Error al obtener los datos del comedor");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchComedorData();
  }, [id]);

  if (!comedorData) return <div>Cargando...{id}</div>;

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-screen-lg mx-4 mt-8 p-6 bg-white rounded-lg shadow-md">
        {/* Sección de encabezado */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={comedorData.fotoPerfil}
              alt="Avatar Uno"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-medium text-black">
              {comedorData.nombre}
            </h1>

            {/* Información de contacto */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>
                  <img
                    src={Vector.src}
                    alt="Location"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>
                  {comedorData.ubicacion.localidad},{" "}
                  {comedorData.ubicacion.provincia}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>
                  <img
                    src={address.src}
                    alt="Address"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>{comedorData.ubicacion.domicilio}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>
                  <img
                    src={phone.src}
                    alt="Phone"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>{comedorData.contacto.tel}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>
                  <img
                    src={mail.src}
                    alt="Mail"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>{comedorData.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-sm text-gray-600 mb-6">{comedorData.descripcion}</p>

        <hr className="my-6 border-gray-200" />

        {/* Sección de Actividad */}
        <div className="space-y-2">
          <h2 className="text-lg text-gray-500">Actividad</h2>
          <div className="rounded-lg ">
            <DonationSection posts={comedorData.posts} comedor={comedorData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComedorPaginaInstitucional_perfil;
