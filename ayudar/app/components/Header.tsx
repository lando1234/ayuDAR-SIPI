// components/Header.tsx

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  logoSrc: string;
  drawerLogoSrc: string;
}

const Header: FC<HeaderProps> = ({ menuOpen, setMenuOpen, logoSrc, drawerLogoSrc }) => {
  return (
    <>
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
          <img src={logoSrc} alt="AYUDAR" className="h-8" />
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
              <img src={drawerLogoSrc} alt="Logo" className="h-20 w-auto" />
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
    </>
  );
};

export default Header;