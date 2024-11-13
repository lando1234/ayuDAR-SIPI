"use client";

import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import AvatarUno from "../icons/AvatarUno.png";
import Vector from "../icons/Vector.png";
import phone from "../icons/phone.png";
import address from "../icons/address.png";
import mail from "../icons/mail.png";
import DonationSection from "../components/DonationSection";
import logoLetras from "../icons/LogoLetras.png";
import logo from "../icons/Logo.png";

const ComedorPaginaInstitucional = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        logoSrc={logoLetras.src} 
        drawerLogoSrc={logo.src} 
      />
      <div className="max-w-screen-lg mx-4 mt-8 p-6 bg-white rounded-lg shadow-md">
        {/* Sección de encabezado */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={AvatarUno.src}
              alt="Avatar Uno"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-medium text-black">
              Comedor granito de arena
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
                <span>Luján, Buenos Aires</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>
                  <img
                    src={address.src}
                    alt="Address"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>Lima 555</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>
                  <img
                    src={phone.src}
                    alt="Phone"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>01123567890</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>
                  <img
                    src={mail.src}
                    alt="Mail"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>info@granito.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-sm text-gray-600 mb-6">
          Somos una organización comunitaria dedicada a brindar asistencia
          alimentaria a personas en situación de vulnerabilidad. Estamos
          ubicados en una zona de alto riesgo social. Buscamos ofrecer una
          comida nutritiva y un espacio de contención a quienes más lo
          necesitan.
        </p>

        <hr className="my-6 border-gray-200" />

        {/* Sección de Actividad */}
        <div className="space-y-2">
          <h2 className="text-lg text-gray-500">Actividad</h2>
          <div className="rounded-lg ">
            <DonationSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComedorPaginaInstitucional;
