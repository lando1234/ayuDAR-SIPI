"use client";

import React from "react";
import Header from "../../components/Header";
import error from "../../images/errorRegister.png";
import Link from "next/link";

const RegistrationError = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />

      <main className="p-4 bg-white rounded-[15px] mt-20 mr-4 ml-5">
        {/* Sección para pantallas pequeñas */}
        <section className="block md:hidden mt-8 mb-20 text-center text-[#00000]">
          <div className="flex justify-center items-center">
            <img
              src={error.src}
              alt="misión"
              className="w-40 h-40 object-contain"
            />
          </div>
          <h2 className="text-lg font-semibold mb-4 text-black">
            Algo salió mal...
          </h2>
          <p className="text-black text-center">
            Por favor verifique sus datos e intentelo de nuevo.
          </p>
          <Link href="/register/location">
            <button
              type="submit"
              className="w-full bg-[#E6FBF3] border-2 border-[#7BD4B3] text-[#7BD4B3] py-2 rounded-[20px] hover:bg-[#86E4C4] transition font-bold mt-4"
            >
              Volver al formulario de registro
            </button>
          </Link>
        </section>

        {/* Sección para pantallas grandes */}
        <section className="hidden md:block mt-8 mb-20 text-center text-[#00000]">
          <div className="flex justify-center items-center">
            <img
              src={error.src}
              alt="misión"
              className="w-86 h-86 object-contain"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Algo salió mal...
          </h2>
          <p className="text-black text-center">
            Por favor verifique sus datos e intentelo de nuevo.
          </p>
          <Link href="../../register/location">
            <button
              type="submit"
              className="w-1/4 bg-[#E6FBF3] border-2 border-[#7BD4B3] text-[#7BD4B3] py-3 rounded-[20px] hover:bg-[#86E4C4] transition font-bold mt-4"
            >
              Volver al formulario de registro
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default RegistrationError;
