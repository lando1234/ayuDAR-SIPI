"use client";

import Header from '../components/Header';
import React, { useState } from 'react';
import logoLetras from '../icons/LogoLetras.png';
import logo from '../icons/Logo.png';
import DonationForm from '../components/DonationForm'; // Importa el nuevo componente

const PaginaDonante = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        logoSrc={logoLetras.src}
        drawerLogoSrc={logo.src}
      />
<div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold mb-4">Formulario de Donación</h1>
  <DonationForm />
</div>
    </div>
  );
};

export default PaginaDonante;