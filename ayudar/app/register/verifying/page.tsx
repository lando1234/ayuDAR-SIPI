"use client";

import React from "react";
import Header from "../../components/Header";
import loading from "../../images/loadingRegister.png";
import logoLetras from './icons/LogoLetras.png';
import logo from './icons/Logo.png';
import { useState } from "react";

const Congrats = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        logoSrc={logoLetras.src} 
        drawerLogoSrc={logo.src} 
      />

      <main className="p-4 bg-white rounded-[15px] mt-20 mr-4 ml-5">
        {/* Sección para pantallas pequeñas */}
        <section className="block md:hidden mt-8 mb-20 text-center text-[#00000]">
          <div className="flex justify-center items-center">
            <img
              src={loading.src}
              alt="misión"
              className="w-40 h-40 object-contain"
            />
          </div>
          <h2 className="text-lg font-semibold mb-4 text-black">
            Verificando sus datos...
          </h2>
          <p className="text-black text-center">
            Esto peude demorar unos instantes.
          </p>
        </section>

        {/* Sección para pantallas grandes */}
        <section className="hidden md:block mt-8 mb-20 text-center text-[#00000]">
          <div className="flex justify-center items-center">
            <img
              src={loading.src}
              alt="misión"
              className="w-86 h-86 object-contain"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-black">
            ¡Bienvenido!
          </h2>
          <p className="text-black text-center">
            Estamos muy felices de que seas parte.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Congrats;
