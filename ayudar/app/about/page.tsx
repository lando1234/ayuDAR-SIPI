"use client";
import { useState } from 'react';
import logoLetras from '../icons/LogoLetras.png';
import logo from '../icons/Logo.png';
import Link from 'next/dist/client/link';
import mision from '../images/mision.jpg';
import objetivos from '../images/objetivos.png';
import valores from '../images/valores.png';


const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
          <div className="relative min-h-screen bg-gray-100">
            {/* Header */}
  <header className="flex justify-between items-center p-4 mb-0" style={{ backgroundColor: '#1E8F62', color: 'white' }}>
          <button
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex-1 flex justify-center items-center">
            <img src={logoLetras.src} alt="AYUDAR" className="h-8" />
          </div>
          <div className="w-6"></div> {/* Placeholder to balance the space */}
        </header>





      {/* Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full text-white transition-transform transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-3/4 max-w-xs p-4`}
        style={{ backgroundColor: '#1E8F62' }}
      >
        {menuOpen && (
          <div className="flex justify-center mb-4">
            <button onClick={() => setMenuOpen(false)}>
              <img src={logo.src} alt="Logo" className="h-20 w-auto " />
            </button>
          </div>
        )}
      <div className="flex flex-col space-y-4">
        <div className="border-b border-white pb-2">
          <Link href="#">Buscar comedores</Link>
        </div>
        <div className="border-b border-white pb-2">
          <Link href="../about">Nosotros</Link>
        </div>
          <Link href="#">Ingresa como comedor</Link>
      </div>
      </div>
      {/* Main Content */}
      <main className="p-4">
        {/* Seccion Mision */}
        <section className="mt-8 text-center text-[#00000]">
        <h2 className="text-lg font-semibold mb-4 text-black">Nuestra misión</h2>
        <div className="flex justify-center items-center">
          <img src={mision.src} className="w-40 h-40 object-contain" />
        </div>
          <p className="text-black text-center">
            Facilitar la conexión entre donantes y comedores comunitarios en Argentina, asegurando una distribución eficiente
            de alimentos y promoviendo el compromiso social para combatir el hambre.
          </p>
        </section>
        {/* Seccion Valores */}
        <section className="mt-8 text-center text-[#00000]">
        <h2 className="text-lg font-semibold mb-4 text-black">Nuestros valores</h2>
        <div className="flex justify-center items-center">
          <img src={valores.src} className="w-40 h-40 object-contain" />
        </div>
          <p className="text-black text-center">
            Nuestros valores se centran en la solidaridad, fomentando la ayuda mutua entre personas y comunidades; 
            la transparencia, asegurando claridad en el destino de las donaciones; el compromiso, trabajando con 
            dedicación por una sociedad más justa; y la eficiencia, optimizando los recursos para lograr un mayor impacto.
          </p>
        </section>
        {/* Seccion Objetivos */}
        <section className="mt-8 text-center text-[#00000]">
        <h2 className="text-lg font-semibold mb-4 text-black">Nuestros objetivos</h2>
        <div className="flex justify-center items-center">
          <img src={objetivos.src} className="w-40 h-40 object-contain" />
        </div>
          <p className="text-black text-center">
          Nuestros objetivos son conectar a donantes con los comedores que más lo necesitan, asegurar transparencia y 
          confianza en el proceso de donación, aumentar el impacto positivo en las comunidades vulnerables y fomentar 
          la participación activa de la sociedad en la lucha contra el hambre.
          </p>
        </section>



      </main>
      <div className="bg-[#1E8F62] shadow rounded-lg p-4 flex flex-col items-center w-full">
            <div className="flex justify-center">
              <h3 className="font-bold text-white text-lg">Lo que hacemos importa</h3>
            </div>
            <div className="flex mt-2 w-full justify-between">
              <div className="w-full h-24 bg-[#1E8F62] rounded border border-white flex flex-col items-center justify-center p-1 mx-1">
                <span className="font-bold text-white text-lg">102</span>
                <span className="text-xs text-white text-center">Comedores beneficiados</span>
              </div>
              <div className="w-full h-24 bg-[#1E8F62] rounded border border-white flex flex-col items-center justify-center p-1 mx-1">
                <span className="font-bold text-white text-lg">2598</span>
                <span className="text-xs text-white text-center">Donaciones gestionadas</span>
              </div>
              <div className="w-full h-24 bg-[#1E8F62] rounded border border-white flex flex-col items-center justify-center p-1 mx-1">
                <span className="font-bold text-white text-lg">305</span>
                <span className="text-xs text-white text-center">Personas ya están ayudando</span>
              </div>
            </div>
          </div>  
    </div>
  );
};

export default About;
