"use client";  // Añadir esta línea para que el componente sea un Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LogoInicioSesion from '../icons/LogoInicioSesion.png';
import Link from 'next/link';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      
    if (email === 'granito' && password === 'admin') {
      sessionStorage.setItem('session', email + "-" + password); // Guardar el inicio de sesión en el sessionStorage
      alert('Inicio de sesión exitoso');
      router.push('./pagina_comedor_perfil'); // Redirigir a la página principal
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-black"> {/* Añadir text-black aquí */}
        <div className="flex justify-center mb-6">
          {/* Logo */}
          <img src={LogoInicioSesion.src} alt="Logo" className="h-16" />
        </div>
        <h2 className="text-center text-xl font-semibold mb-4">Inicia sesión en Ayudar</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-16">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Contraseña</label>
            <div className="relative mb-16">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#A8F0D5] border-2 border-[#1E8F62] text-[#065F46] py-2 rounded-[20px] hover:bg-[#86E4C4] transition font-bold"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="text-center text-sm mt-10">
          <p>¿No tenés cuenta?</p>
          <Link href="/register" className="underline font-bold">
            Regístrate acá
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;