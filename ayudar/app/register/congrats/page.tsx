"use client";

import React from "react";
import Header from "../../components/Header";
import congrats from "../../images/congratsRegister.png";
import Link from "next/link";

const Congrats = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />

      <main className="p-4 bg-white rounded-[15px] mt-20 mr-4 ml-5">
        {/* Sección para pantallas pequeñas */}
        <section className="block md:hidden mt-8 mb-20 text-center text-[#00000]">
          <div className="flex justify-center items-center">
            <img
              src={congrats.src}
              alt="misión"
              className="w-40 h-40 object-contain"
            />
          </div>
          <h2 className="text-lg font-semibold mb-4 text-black">
            ¡Bienvenido!
          </h2>
          <p className="text-black text-center">
            Estamos muy felices de que seas parte.
          </p>
          <Link href="/">
            <button
              type="submit"
              className="w-full bg-[#E6FBF3] border-2 border-[#7BD4B3] text-[#7BD4B3] py-2 rounded-[20px] hover:bg-[#86E4C4] transition font-bold mt-4"
            >
              Visitar mi perfil
            </button>
          </Link>
        </section>

        {/* Sección para pantallas grandes */}
        <section className="hidden md:block mt-8 mb-20 text-center text-[#00000]">
          <div className="flex justify-center items-center">
            <img
              src={congrats.src}
              alt="misión"
              className="w-86 h-86 object-contain"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-black">
            ¡Bienvenido!
          </h2>
          <p className="text-black text-center">
            Estamos muy felices de que seas parte.
          </p>
          <Link href="/">
            <button
              type="submit"
              className="w-1/4 bg-[#E6FBF3] border-2 border-[#7BD4B3] text-[#7BD4B3] py-3 rounded-[20px] hover:bg-[#86E4C4] transition font-bold mt-4"
            >
              Visitar mi perfil
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Congrats;
