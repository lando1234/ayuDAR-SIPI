// pages/index.tsx

"use client";
import { useEffect, useState } from "react";
import AlimentosIcon from "./icons/AlimentosIcon.png";
import DineroIcon from "./icons/DineroIcon.png";
import IndumentariaIcon from "./icons/IndumentariaIcon.png";
import VoluntarioIcon from "./icons/VoluntariadoIcon.png";
import fondo from "./images/fondo.jpg";
import SaberMas from "./icons/SaberMas.png";
import Header from "./components/Header";
import DonationCard, { DonationCardProps } from "./components/DonationCard";



const Home = () => {
  const [posts, setPosts] = useState<DonationCardProps[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const {data} = await response.json();
  
      // Verifica que 'data' sea un array antes de asignarlo a 'posts'
      if (Array.isArray(data)) {
        setPosts(data);
      } else {
        console.error("La respuesta no es un array:", data);
        setPosts([]); // Establece posts como array vacío si la respuesta no es un array
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]); // Establece posts como array vacío en caso de error
    }
  };


  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />
      {/* Sección para pantallas pequeñas */}
      <section
        className="bg-cover bg-center shadow p-4 text-center md:hidden"
        style={{ backgroundImage: `url(${fondo.src})` }}
      >
        <h1 className="text-xl font-bold mb-2 text-white">
          Doná y hacé el cambio
        </h1>
        <p className="text-gray-200 mb-4">Aprendé cómo podés ayudar</p>
        <button>
          <img src={SaberMas.src} alt="Saber Más" className="h-10" />
        </button>
      </section>

      {/* Sección para pantallas medianas y grandes */}
      <section
        className="hidden md:flex bg-cover bg-center shadow p-4 text-center min-h-screen flex-col justify-center"
        style={{ backgroundImage: `url(${fondo.src})` }}
      >
        <h1 className="text-4xl font-bold mb-2 text-white">
          Doná y hacé el cambio
        </h1>
        <p className="text-2xl text-gray-200 mb-4">Aprendé cómo podés ayudar</p>
        <div className="flex justify-center">
          <button>
            <img src={SaberMas.src} alt="Saber Más" className="h-10" />
          </button>
        </div>
      </section>
      {/* Main Content */}
      <main className="p-4">
        {/* Sección para pantallas pequeñas */}

        <section className="mt-2  md:hidden">
          <h2
            className="text-lg font-medium mb-2 text-center text-black"
            style={{ marginBottom: "-18px" }}
          >
            ¿Qué podés donar?
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img
                src={VoluntarioIcon.src}
                alt="Voluntariado"
                className="w-20 h-20 object-contain"
              />
              <p
                className="mt-0 text-sm text-black"
                style={{ marginTop: "-18px" }}
              >
                Voluntariado
              </p>{" "}
              {/* Ajuste del tamaño del texto */}
            </div>
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img
                src={DineroIcon.src}
                alt="Donación Económica"
                className="w-20 h-20 object-contain"
              />
              <p
                className="mt-0 text-sm text-black"
                style={{ marginTop: "-18px" }}
              >
                Donación Económica
              </p>{" "}
              {/* Ajuste del tamaño del texto */}
            </div>
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img
                src={IndumentariaIcon.src}
                alt="Indumentaria"
                className="w-20 h-20 object-contain"
              />
              <p
                className="mt-0 text-sm text-black"
                style={{ marginTop: "-18px" }}
              >
                Indumentaria
              </p>{" "}
              {/* Ajuste del tamaño del texto */}
            </div>
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img
                src={AlimentosIcon.src}
                alt="Alimentos"
                className="w-20 h-20 object-contain"
              />
              <p
                className="mt-0 text-sm text-black"
                style={{ marginTop: "-18px" }}
              >
                Alimentos
              </p>{" "}
              {/* Ajuste del tamaño del texto */}
            </div>
          </div>
        </section>

        {/* Sección para pantallas medianas y grandes */}
        <section className="mt-2 hidden md:block">
          <h2
            className="text-lg font-medium mb-2 text-center text-black"
            style={{ marginBottom: "-18px" }}
          >
            ¿Qué podés donar?
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img
                src={VoluntarioIcon.src}
                alt="Voluntariado"
                className="w-20 h-20 object-contain"
              />
              <p className="mt-2 text-black">Voluntariado</p>{" "}
              {/* Ajuste del margen superior */}
            </div>
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img
                src={DineroIcon.src}
                alt="Donación Económica"
                className="w-20 h-20 object-contain"
              />
              <p className="mt-2 text-black">Donación Económica</p>{" "}
              {/* Ajuste del margen superior */}
            </div>
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img
                src={IndumentariaIcon.src}
                alt="Indumentaria"
                className="w-20 h-20 object-contain"
              />
              <p className="mt-2 text-black">Indumentaria</p>{" "}
              {/* Ajuste del margen superior */}
            </div>
            <div className="p-4 rounded-lg flex flex-col items-center">
              <img
                src={AlimentosIcon.src}
                alt="Alimentos"
                className="w-20 h-20 object-contain"
              />
              <p className="mt-2 text-black">Alimentos</p>{" "}
              {/* Ajuste del margen superior */}
            </div>
          </div>
        </section>
      
      
        {/* Main Content */}
      <main className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-black">
          Enterate qué necesita cada comedor
        </h2>

        {/* Renderizando directamente DonationCard */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <DonationCard key={index} post={post.post} comedor={post.comedor} />
          ))}
        </div>
      </main>
      </main>
    </div>
  );
};

export default Home;