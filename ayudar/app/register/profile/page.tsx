import React from 'react'
import { FaEnvelope, FaFacebookF, FaGlobe, FaInstagram, FaLock, FaPhone } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div className="text-left">
          <span className="text-green-600 font-bold text-lg">2 de 3</span>
          <p className="text-sm text-gray-600">Datos de perfil</p>
        </div>
        <div className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center">
          <span className="text-green-600 font-bold">🟡</span>
        </div>
      </div>
      <form>
        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-gray-400 mr-3" />
          <input
            type="email"
            placeholder="Email *"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FaLock className="text-gray-400 mr-3" />
          <input
            type="password"
            placeholder="Contraseña *"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FaPhone className="text-gray-400 mr-3" />
          <input
            type="tel"
            placeholder="Teléfono *"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FaFacebookF className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Facebook"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FaInstagram className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Instagram"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FaGlobe className="text-gray-400 mr-3" />
          <input
            type="url"
            placeholder="Sitio web"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Continuar
        </button>
      </form>
    </div>
  )
}

export default Profile;