"use client";
import React from "react";
import Header from "../components/Header";
import imgRegi from "../images/fondoRegistro.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-start justify-center bg-primary text-white p-4">
        <div className="bg-primary text-center rounded-lg p-6 max-w-sm w-full shadow-lg">
          {/* Image Section */}
          <div className="flex justify-center mb-4">
            <img
              src={`${imgRegi.src}`}
              alt="Ayudar"
              className="w-full rounded-md"
            />
          </div>

          {/* Title Section */}
          <h1 className="text-2xl font-bold mb-2">
            Registra tu comedor comunitario
          </h1>

          {/* Description Section */}
          <p className="text-sm mb-6">
            Unite para gestionar donaciones o inicia sesión si ya tenés una
            cuenta
          </p>

          {/* Buttons Section */}
          <div className="flex flex-col space-y-4">
            <Link
              href="location"
              className="w-full bg-lightGreen text-primary font-semibold py-2 rounded-full hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Registrarse como comedor
            </Link>
            <Link
              href="/login"
              className="w-full border border-lightgreen bg-primary rounded-full text-white font-semibold py-2  hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
