// pages/index.tsx

"use client";
import { useState } from 'react';
import AlimentosIcon from '../icons/AlimentosIcon.png';
import DineroIcon from '../icons/DineroIcon.png';
import IndumentariaIcon from '../icons/IndumentariaIcon.png';
import VoluntarioIcon from '../icons/VoluntariadoIcon.png';
import fondo from '../images/fondo.jpg';
import logoLetras from '../icons/LogoLetras.png';
import logo from '../icons/Logo.png';
import SaberMas from '../icons/SaberMas.png';
import AvatarUno from '../icons/AvatarUno.png';
import AvatarDos from '../icons/AvatarDos.png';
import AvatarTres from '../icons/AvatarTres.png';
import CheckIncompleto from '../icons/CheckIncompletoIcon.png';
import CheckCompleto from '../icons/CheckCompletoIcon.png';
import AlimentosPequenaIcon from '../icons/AlimentosPequenaIcon.png';
import IndumentariaPequenaIcon from '../icons/IndumentariaPequenaIcon.png';
import VoluntariadoPequenoIcon from '../icons/VoluntariadoPequenoIcon.png';
import Link from 'next/dist/client/link';
import Header from '../components/Header';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
          <div className="relative min-h-screen bg-gray-100">
      <Header 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        logoSrc={logoLetras.src} 
        drawerLogoSrc={logo.src} 
      />

      <section
            className="bg-cover bg-center shadow  p-4 text-center"
            style={{ backgroundImage: `url(${fondo.src})` }}>
            <h1 className="text-xl font-bold mb-2 text-white">Doná y hacé el cambio</h1>
            <p className="text-gray-200 mb-4">Aprendé cómo podés ayudar</p>
            <button>
              <img src={SaberMas.src} alt="Saber Más" className="h-10" />
            </button>
        </section>
      {/* Main Content */}
      <main className="p-4">


        <section className="mt-2">
          <h2 className="text-lg font-semibold mb-2 text-center text-black" style={{ marginBottom: '-18px' }}>¿Qué podés donar?</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img src={VoluntarioIcon.src} alt="Voluntariado" className="w-20 h-20 object-contain" />
              <p className="mt-0 text-black" style={{ marginTop: '-18px' }}>Voluntariado</p>
            </div>
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img src={DineroIcon.src} alt="Donación Económica" className="w-20 h-20 object-contain" />
              <p className="mt-0 text-black" style={{ marginTop: '-18px' }}>Donación Económica</p>
            </div>
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img src={IndumentariaIcon.src} alt="Indumentaria" className="w-20 h-20 object-contain" />
              <p className="mt-0 text-black" style={{ marginTop: '-18px' }}>Indumentaria</p>
            </div>
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img src={AlimentosIcon.src} alt="Alimentos" className="w-20 h-20 object-contain" />
              <p className="mt-0 text-black" style={{ marginTop: '-18px' }}>Alimentos</p>
            </div>
          </div>
        </section>

      <section className="mt-2">
  <h2 className="text-lg font-semibold mb-4 text-black">Enterate qué necesita cada comedor</h2>
  <div className="space-y-4">
<div className="bg-white shadow rounded-lg p-4 flex items-start">
  <img src={AvatarUno.src} alt="Avatar Uno" className="h-8 mr-3 mt-2" />
      <div>
        <h3 className="font-bold text-black">Colecta día del niño</h3>
        <p className="text-xs text-[#919EAB]">
          10 Julio 2022 - Comedor Granito de Arena
        </p>
        <div className="flex items-center mt-2">
          <img src={CheckIncompleto.src} alt="Check Incompleto" className="h-4 w-4 mr-2" />
          <p className="text-sm text-[#6AB8E2]" >
            Todavía podes ayudar en este pedido
          </p>
        </div>
        <div className="mt-2">
          <p className="text-sm text-[#1C252E]">
            Estamos en la búsqueda de juguetes y dulces para armar bolsitas y regalarle a los chicos en su día! Es para la segunda semana de Agosto 🗓️
          </p>
          <div className="flex mt-2 space-x-2">
            <img src={AlimentosPequenaIcon.src} alt="Alimentos" className="h-4 w-4" />
            <img src={IndumentariaPequenaIcon.src} alt="Indumentaria" className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
          

       {/* Otra tarjeta*/}
      <div className="bg-white shadow rounded-lg p-4 flex items-center">
        <img src={AvatarDos.src} alt="Avatar Uno" className="h-8 mr-2" />
        <div>
          <h3 className="font-bold text-black">Pasá un día con nosotros</h3>
          <p className="text-xs text-[#919EAB]">
            10 Julio 2022 - Comedor Sonrisas
          </p>
          <div className="flex items-center">
            <img src={CheckIncompleto.src} alt="Check Incompleto" className="h-4 w-4 mr-2" />
            <p className="text-sm text-[#6AB8E2]">
              Todavía podes ayudar en este pedido
            </p>
          </div>
          <p className="text-sm text-[#1C252E]">
            Estamos en la búsqueda de juguetes y dulces para armar bolsitas y regalarle a los chicos en su día! Es para la segunda semana de Agosto 🗓️
          </p>
          <div className="flex mt-2 space-x-2">
            <img src={VoluntariadoPequenoIcon.src} alt="Voluntario" className="h-4 w-4" />
          </div>
        </div>
      </div>
         {/* Otra tarjeta*/}
    <div className="bg-white shadow rounded-lg p-4 flex items-center">
      <img src={AvatarTres.src} alt="Avatar Uno" className="h-8 mr-2" />
      <div>
        <h3 className="font-bold text-black">Juntamos fondos para renovar las mesas</h3>
        <p className="text-xs text-[#919EAB]">
        10 Julio 2022 - Comedor Sonrisas
        </p>
        <div className="flex items-center">
          <img src={CheckCompleto.src} alt="Check Incompleto" className="h-4 w-4 mr-2" />
          <p className="text-sm text-[#1E8F62]">
          ¡Meta completada!
          </p>
        </div>
        <p className="text-sm text-[#1C252E]"   >
        Estamos en la búsqueda de juguetes y dulces para armar bolsitas y regalarle a los chicos en su día! Es para la segunda semana de Agosto 🗓️
        </p>
        <div className="flex mt-2 space-x-2">
            <img src={AlimentosPequenaIcon.src} alt="Alimentos" className="h-4 w-4" />
            <img src={IndumentariaPequenaIcon.src} alt="Indumentaria" className="h-4 w-4" />
            <img src={VoluntariadoPequenoIcon.src} alt="Voluntario" className="h-4 w-4" />
          </div>
      </div>
    </div>
   
  </div>
</section>
      </main>
    </div>
  );
};

export default Home;
