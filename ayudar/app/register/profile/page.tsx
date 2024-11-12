"use client";

import RegisterBase from "@/app/components/register/RegisterBase";
import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLock,
  FaPhone,
} from "react-icons/fa";

const Profile = () => {
  return (
    <RegisterBase
      progress={2}
      title="Registra tu comedor"
      subtitle="Datos del perfil"
    >
      <form className="min-h-screen rounded-3xl bg-white p-6 rounded-b-lg w-full max-w-md text-gray-700 space-y-4">
        <div className="mb-4 flex items-center">
          <div className="border border-gray-300 p-3 rounded-l-lg">
            <FaEnvelope className="text-gray-400" />
          </div>
          <input
            type="email"
            placeholder="Email *"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg rounded-l-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <div className="border border-gray-300 p-3 rounded-l-lg">
            <FaLock className="text-gray-400" />
          </div>
          <input
            type="password"
            placeholder="Contraseña *"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg rounded-l-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <div className="border border-gray-300 p-3 rounded-l-lg">
            <FaPhone className="text-gray-400" />
          </div>
          <input
            type="tel"
            placeholder="Teléfono *"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg rounded-l-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <div className="border border-gray-300 p-3 rounded-l-lg">
            <FaFacebookF className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Facebook"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg rounded-l-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <div className="border border-gray-300 p-3 rounded-l-lg">
            <FaInstagram className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Instagram"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg rounded-l-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <div className="border border-gray-300 p-3 rounded-l-lg">
            <FaGlobe className="text-gray-400" />
          </div>
          <input
            type="url"
            placeholder="Sitio web"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg rounded-l-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex justify-end">
          <Link
            href="contact"
            type="submit"
            className="rounded-full mt-4 py-2 px-6 bg-green-200 text-primary font-semibold  hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 border border-primary"
          >
            Continuar
          </Link>
        </div>
      </form>
    </RegisterBase>
  );
};

export default Profile;
