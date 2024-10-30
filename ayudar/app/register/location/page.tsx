"use client";

import React from "react";
import RegisterBase from "@/app/components/register/RegisterBase";
import Link from "next/link";

const Location = () => {
  return (
    <RegisterBase
      progress={1}
      title="Registra tu comedor"
      subtitle="Información general"
    >
      <form className="min-h-screen rounded-3xl bg-white p-6 rounded-b-lg w-full max-w-md text-gray-400 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="nombre">
            Nombre del comedor *
          </label>
          <input
            type="text"
            id="nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="idRenacom">
            ID ReNaCom *
          </label>
          <input
            type="text"
            id="idRenacom"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="provincia"
            >
              Provincia *
            </label>
            <select
              id="provincia"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Seleccione</option>
              <option value="prov1">Provincia 1</option>
              <option value="prov2">Provincia 2</option>
            </select>
          </div>
          <div className="w-1/2">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="codPostal"
            >
              Cod. Postal *
            </label>
            <input
              type="text"
              id="codPostal"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="partido">
            Partido / Localidad *
          </label>
          <input
            type="text"
            id="partido"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="domicilio">
            Domicilio *
          </label>
          <input
            type="text"
            id="domicilio"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex justify-end">
          <Link
            href="profile"
            className="rounded-full mt-4 py-2 px-6 bg-green-200 text-green-800 font-semibold  hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 border border-primary"
          >
            Continuar
          </Link>
        </div>
      </form>
    </RegisterBase>
  );
};

export default Location;
