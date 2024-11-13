import { useEffect, useState } from "react";
import Link from "next/link";
import logoLetras from "../icons/LogoLetras.png";
import logo from "../icons/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar si hay una sesión activa
    const session = sessionStorage.getItem("session");
    if (session) {
      setIsLoggedIn(true); // Sesión activa
    } else {
      setIsLoggedIn(false); // No hay sesión
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("session");
    window.location.href = "../login";
  };

  return (
    <>
      {/* Barra de navegación */}
      <header className="flex justify-between items-center p-4 mb-0 md:hidden shadow-md z-50 bg-primary text-white relative w-full">
        <button className="p-2" onClick={() => setMenuOpen(!menuOpen)}>
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
          <Link href="/">
            <img src={logoLetras.src} alt="AYUDAR" className="h-8" />
          </Link>
        </div>

        {/* Placeholder para balancear el espacio en mobile */}
        <div className="w-6"></div>
      </header>

      {/* Menu Drawer para pantallas pequeñas */}
      <div
        className={`z-50 fixed top-0 left-0 h-full text-white transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } w-3/4 max-w-xs p-4 md:hidden`} // Ocultar en pantallas medianas y grandes
        style={{ backgroundColor: "#1E8F62" }}
      >
        {menuOpen && (
          <div className="flex justify-center mb-4">
            <button onClick={() => setMenuOpen(false)}>
              <img src={logo.src} alt="Logo" className="h-20 w-auto" />
            </button>
          </div>
        )}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col space-y-4">
            <div className="border-b border-white pb-2">
              <Link href="/search">Buscar comedores</Link>
            </div>
            <div className="border-b border-white pb-2">
              <Link href="/about">Nosotros</Link>
            </div>

            {/* Solo mostrar "Ingresa como comedor" si NO está logueado */}
            {!isLoggedIn && (
              <Link href="/login" className="block mb-4">
                Ingresa como comedor
              </Link>
            )}
            {/* Solo mostrar "Mi perfil" si SI está logueado */}
            {isLoggedIn && (
              <Link href="/pagina_comedor_perfil" className="block mb-4">
                Mi perfil
              </Link>
            )}
          </div>

          {/* Solo mostrar el botón "Cerrar sesión" si está logueado */}
          {isLoggedIn && (
            <div className="mt-80">
              <button
                onClick={handleLogout}
                className="w-3/4 bg-[#E6FBF3] border-2 border-[#7BD4B3] text-[#1E8F62] py-3 rounded-[20px] hover:bg-[#A8F0D5] transition font-bold mt-4"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Menu para pantallas grandes */}
      <div
        className="hidden md:flex items-center justify-between p-4"
        style={{ backgroundColor: "#1E8F62", color: "white" }}
      >
        <div className="flex items-center space-x-8">
          <Link href="/search" className="no-underline text-white">
            Buscar comedores
          </Link>
          <Link href="/about" className="no-underline text-white">
            Nosotros
          </Link>

          {/* Solo mostrar "Ingresa como comedor" si NO está logueado */}
          {!isLoggedIn && (
            <Link href="/login" className="no-underline text-white">
              Ingresa como comedor
            </Link>
          )}
          {/* Solo mostrar "Mi perfil" si SI está logueado */}
          {isLoggedIn && (
            <Link
              href="/pagina_comedor_perfil"
              className="no-underline text-white"
            >
              Mi perfil
            </Link>
          )}

          {/* Solo mostrar el botón "Cerrar sesión" si está logueado */}
          {isLoggedIn && (
            <button onClick={handleLogout} className="no-underline text-white">
              Cerrar sesión
            </button>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Link href="/home">
            <img src={logoLetras.src} alt="AYUDAR" className="h-8" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
