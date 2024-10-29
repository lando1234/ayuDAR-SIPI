"use client";
import Header from "@/app/components/Header";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logoLetras from "../icons/LogoLetras.png";
import logo from "../icons/Logo.png";
import OrganizationSection from "@/app/components/OrganizationSection";
import CheckBoxList from "@/app/components/CheckBoxList";
import OrganizationCard, { Organization } from "../components/OrganizationCard";

const data = [
        {
            avatar : "",
            name : "Comedor Luz de Esperanza",
            city: "Córdoba",
            province: "Córdoba",
            description: "Espacio de ayuda social dedicado a proveer alimentos y contención a familias en situación de vulnerabilidad en la ciudad de Córdoba."
        },
        {
            avatar : "",
            name : "Manos Abiertas",
            city: "San Miguel de Tucumán",
            province: "Tucumán",
            description: "Organización que ofrece almuerzos diarios y talleres educativos para niños de barrios carenciados en la provincia de Tucumán."
        },
        {
            avatar : "",
            name : "Comedor Creciendo Juntos",
            city: "Posadas",
            province: "Misiones",
            description: "Dedicados a la asistencia alimentaria de personas en situación de riesgo social, brindando también talleres de formación en oficios para adultos."
        },
        {
            avatar : "",
            name : "Asociación La Bendición",
            city: "Mendoza",
            province: "Mendoza",
            description: "Comedor comunitario que se dedica a brindar almuerzos y cenas a personas en situación de calle, promoviendo un espacio de contención."
        },
        {
            avatar : "",
            name : "Comedor Juntos Podemos",
            city: "Neuquén",
            province: "Neuquén",
            description: "Organización comunitaria dedicada a la alimentación y apoyo escolar para niños y adolescentes en condiciones de vulnerabilidad."
        },
        {
            avatar : "",
            name : "Fundación Abrazos Solidarios",
            city: "Salta",
            province: "Salta",
            description: "Ofrecemos asistencia alimentaria y vestimenta a familias en situación de extrema pobreza en los alrededores de la ciudad de Salta."
        },
        {
            avatar : "",
            name : "Centro de Ayuda San José",
            city: "Santa Rosa",
            province: "La Pampa",
            description: "Comedor que brinda desayunos, almuerzos y talleres de apoyo a personas en situación de calle en la ciudad de Santa Rosa."
        },
        {
            avatar : "",
            name : "Comedor Unidos por el Cambio",
            city: "San Salvador de Jujuy",
            province: "Jujuy",
            description: "Espacio solidario que ofrece alimentos y actividades recreativas para niños de barrios vulnerables en la provincia de Jujuy."
        },
        {
            avatar : "",
            name : "Fundación Suma Paz",
            city: "Resistencia",
            province: "Chaco",
            description: "Organización dedicada a la asistencia alimentaria y talleres de capacitación laboral para jóvenes en situación de riesgo social."
        },
        {
            avatar : "",
            name : "Comedor Pan de Vida",
            city: "Formosa",
            province: "Formosa",
            description: "Brindamos almuerzos y talleres de desarrollo personal para familias de bajos recursos, con un enfoque especial en la contención familiar."
        },
        {
            avatar : "",
            name : "Fundación Tierra de Esperanza",
            city: "San Juan",
            province: "San Juan",
            description: "Ayudamos a familias en situación de vulnerabilidad con alimentos y educación, promoviendo la inclusión social en nuestra comunidad."
        },
        {
            avatar : "",
            name : "Asociación Corazón Solidario",
            city: "Rosario",
            province: "Santa Fe",
            description: "Proporcionamos alimentos y apoyo psicológico a personas en situación de calle en la ciudad de Rosario."
        },
        {
            avatar : "",
            name : "Centro Comunitario Manos Unidas",
            city: "San Carlos de Bariloche",
            province: "Río Negro",
            description: "Ofrecemos comidas y actividades recreativas para familias de bajos recursos en la región de Bariloche."
        },
        {
            avatar : "",
            name : "Comedor Nueva Esperanza",
            city: "San Luis",
            province: "San Luis",
            description: "Espacio de contención y alimentación para familias en situación de vulnerabilidad, enfocado en mejorar la calidad de vida de la comunidad."
        },
        {
            avatar : "",
            name : "Comedor La Esperanza",
            city: "Trelew",
            province: "Chubut",
            description: "Brindamos asistencia alimentaria y apoyo escolar para niños y jóvenes en situación de vulnerabilidad en la ciudad de Trelew."
        },
        {
            avatar : "",
            name : "Fundación Volver a Soñar",
            city: "Paraná",
            province: "Entre Ríos",
            description: "Ofrecemos desayunos y talleres para niños de familias de bajos recursos en barrios periféricos de Paraná."
        },
        {
            avatar : "",
            name : "Comedor Unidos por la Esperanza",
            city: "La Rioja",
            province: "La Rioja",
            description: "Brindamos alimentos y orientación a personas en situación de vulnerabilidad, buscando mejorar sus condiciones de vida."
        },
        {
            avatar : "",
            name : "Centro Solidario Los Amigos",
            city: "Rafaela",
            province: "Santa Fe",
            description: "Espacio de ayuda que ofrece alimentos y actividades recreativas para familias en situación de pobreza en Rafaela."
        },
        {
            avatar : "",
            name : "Hogar y Comedor Las Manos de Dios",
            city: "Catamarca",
            province: "Catamarca",
            description: "Organización que ofrece alimentos y refugio a personas en situación de calle en la capital de Catamarca."
        },
        {
            avatar : "",
            name : "Comedor Abriendo Caminos",
            city: "Río Gallegos",
            province: "Santa Cruz",
            description: "Dedicados a la alimentación de personas en situación de vulnerabilidad, especialmente durante los meses de invierno."
        },
        {
            avatar : "",
            name : "Fundación Dar Esperanza",
            city: "San Fernando del Valle de Catamarca",
            province: "Catamarca",
            description: "Organización sin fines de lucro que brinda almuerzos y cenas diarias a personas en situación de calle."
        },
        {
            avatar : "",
            name : "Comedor Por un Mañana Mejor",
            city: "Viedma",
            province: "Río Negro",
            description: "Ayudamos con alimentos y contención a familias en situación de riesgo social, con especial atención a niños y adultos mayores."
        },
        {
            avatar : "",
            name : "Centro Solidario La Esperanza",
            city: "Gualeguaychú",
            province: "Entre Ríos",
            description: "Ofrecemos almuerzos y apoyo escolar a niños y adolescentes en situación de vulnerabilidad."
        },
        {
            avatar : "",
            name : "Comedor La Unión",
            city: "Villa María",
            province: "Córdoba",
            description: "Brindamos comida y talleres de habilidades a personas en situación de calle en el área de Villa María."
        },
        {
            avatar : "",
            name : "Fundación Alma Solidaria",
            city: "Mendoza",
            province: "Mendoza",
            description: "Espacio de ayuda social donde ofrecemos alimentos, contención y actividades recreativas para familias de bajos recursos."
        },
        {
            avatar : "",
            name : "Centro Comunitario Amanecer",
            city: "San Rafael",
            province: "Mendoza",
            description: "Ofrecemos desayunos y actividades para niños y adolescentes de barrios vulnerables en el área de San Rafael."
        },
        {
            avatar : "",
            name : "Comedor Unidos Somos Más",
            city: "San Luis",
            province: "San Luis",
            description: "Dedicados a brindar almuerzos y talleres de orientación laboral para jóvenes en situación de riesgo."
        },
        {
            avatar : "",
            name : "Fundación Mis Manos",
            city: "Concordia",
            province: "Entre Ríos",
            description: "Ofrecemos comida y apoyo escolar a niños de familias en situación de vulnerabilidad en la ciudad de Concordia."
        },
        {
            avatar : "",
            name : "Centro de Ayuda Puntos de Luz",
            city: "Comodoro Rivadavia",
            province: "Chubut",
            description: "Brindamos asistencia alimentaria y vestimenta a personas en situación de calle, con especial atención en los meses de invierno."
        },
        {
            avatar : "",
            name : "Comedor San Francisco",
            city: "San Salvador de Jujuy",
            province: "Jujuy",
            description: "Espacio que ofrece almuerzos y actividades recreativas para niños y familias en situación de vulnerabilidad."
        },
        {
            avatar : "",
            name : "Fundación Haciendo Camino",
            city: "Clorinda",
            province: "Formosa",
            description: "Organización que ofrece alimentos y apoyo escolar a niños de familias en situación de vulnerabilidad."
        },
        {
            avatar : "",
            name : "Centro Solidario Alas de Esperanza",
            city: "San Juan",
            province: "San Juan",
            description: "Asistimos con alimentos y orientación a familias de bajos recursos en la ciudad de San Juan."
        },
        {
            avatar : "",
            name : "Comedor Los Amigos del Alma",
            city: "San Fernando",
            province: "Buenos Aires",
            description: "Dedicados a brindar alimentos y un espacio de contención para personas en situación de vulnerabilidad en San Fernando."
        }
]

const Search = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [organizations, setOrganizations] = useState(Array<Organization>);
  const [filteredOrganizations, setFilteredOrganizations] = useState(Array<Organization>);
  const [provincesFilter, setProvincesFilter] = useState([]);
  
  useEffect(()=>{
    setOrganizations(data);
  },[])


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    const filteredOrganizations = organizations.filter((organization : Organization) => 
      organization.name.toLowerCase().includes(search.toLowerCase()));
    
    setFilteredOrganizations(filteredOrganizations);
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        logoSrc={logoLetras.src}
        drawerLogoSrc={logo.src}
      />

      <div className="bg-white p-6">
        <div className="flex gap-3 ">
          <div className="w-full flex items-center justify-between border-2 py-1 px-2 rounded-md">
            <input
              type="text"
              placeholder="Buscar por nombre"
              value={search}
              className="flex-grow outline-none text-gray-600 focus:text-black"
              onChange={handleSearchChange}
            />
            <FaSearch className="h-6 w-5 text-gray-400"></FaSearch>
          </div>
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="focus:ring-2 border-2 focus:ring-gray-400 rounded-md p-2.5 text-center inline-flex items-center dark:hover:bg-customGrey"
          >
            <FaFilter className="h-6 w-5 text-gray-400"></FaFilter>
            <span className="sr-only">Filtro de provincias</span>
          </button>
        </div>

        {!(search.length > 0) ? (
          <div className="bg-white flex items-center justify-center flex-col h-96">
            <FaMagnifyingGlass className="text-primary" size={80} />
            <span className="text-gray-400 mt-3">Descubre comedores</span>
          </div>
        ) : (
          <div>
            <span className="text-black">Resultados de tu busqueda</span>
            <section className="mt-2">
              <div className="space-y-4">
                {filteredOrganizations.map((card, index) => (
                  <OrganizationCard key={index} {...card} />
                ))}
              </div>
            </section>
          </div>
        )}
      </div>

      {showModal ? (
        <>
          <div className="p-10 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    Provincias
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <CheckBoxList></CheckBoxList>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Search;
