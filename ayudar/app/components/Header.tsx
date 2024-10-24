import { FC } from 'react';
import Link from 'next/link';



interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  logoSrc: string;
  drawerLogoSrc: string;
}

const Header: FC<HeaderProps> = ({ menuOpen, setMenuOpen, logoSrc, drawerLogoSrc }) => {
  const handleLogout = () => {
    sessionStorage.removeItem('session');
    window.location.href = '../login';
  }
  return (
    <>
      {/* Barra de navegación */}
      <header className="flex justify-between items-center p-4 mb-0 md:hidden" style={{ backgroundColor: '#1E8F62', color: 'white' }}>
  <button
    className="p-2" // Este botón se muestra solo en responsive
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

  {/* Logo para Mobile */}
  <div className="flex justify-center">
    <Link href="./">
      <img src={logoSrc} alt="AYUDAR" className="h-8" />
    </Link>
  </div>

  {/* Placeholder para balancear el espacio en mobile */}
  <div className="w-6"></div>
</header>


      {/* Menu Drawer para pantallas pequeñas */}
      <div
        className={`fixed top-0 left-0 h-full text-white transition-transform transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-3/4 max-w-xs p-4 md:hidden`} // Ocultar en pantallas medianas y grandes
        style={{ backgroundColor: '#1E8F62' }}
      >
        {menuOpen && (
          <div className="flex justify-center mb-4">
            <button onClick={() => setMenuOpen(false)}>
              <img src={drawerLogoSrc} alt="Logo" className="h-20 w-auto" />
            </button>
          </div>
        )}
        <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <div className="border-b border-white pb-2">
            <Link href="../search">Buscar comedores</Link>
          </div>
          <div className="border-b border-white pb-2">
            <Link href="../about">Nosotros</Link>
          </div>
          <Link href="../login">Ingresa como comedor</Link>
        </div>
        <button onClick={handleLogout} className='self-end'>Cerrar sesión</button>
      </div>
      </div>

      {/* Menu para pantallas grandes */}
      <div className="hidden md:flex items-center justify-between p-4" style={{ backgroundColor: '#1E8F62', color: 'white' }}>
        <div className="flex items-center space-x-8">
          <Link href="../search" className="no-underline text-white">Buscar comedores</Link>
          <Link href="../about" className="no-underline text-white">Nosotros</Link>
          <Link href="../login" className="no-underline text-white">Ingresa como comedor</Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="../home">
            <img src={logoSrc} alt="AYUDAR" className="h-8" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
