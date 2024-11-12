"use client";
import Header from "@/app/components/Header";
import React, { useEffect, useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import CheckBoxList from "@/app/components/CheckBoxList";
import OrganizationCard from "../components/OrganizationCard";
import { IComedor } from "@/code/db/Comedor.Model";
import logoLetras from "../icons/LogoLetras.png";
import logo from "../icons/Logo.png";


const Search = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  {/*  const [search, setSearch] = useState(""); SE ELIMINO EL SEARCH, NO SE USABA*/}

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [organizations, setOrganizations] = useState(Array<IComedor>);
  const [filteredOrganizations, setFilteredOrganizations] = useState(
    Array<IComedor>
  );
  const [selectedProvinces, setSelectedProvinces] = useState(Array<string>);

  // Nueva función para obtener datos del backend
  const fetchOrganizations = async (search : string) => {
    try {
      const response = await fetch(
        `/api/comedor?search=${encodeURIComponent(search)}`
      );
      if (response.ok) {
        const data = await response.json();
        setOrganizations(data);
      } else {
        console.error("Error al obtener comedores");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  useEffect(() => {
    // Llama a fetchOrganizations cuando cambia la búsqueda
    fetchOrganizations(search);
  }, [search]);

  useEffect(() => {
    // Filtra las organizaciones obtenidas según el nombre y la provincia
    let result = organizations.filter((organization) =>
      organization.nombre.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedProvinces.length) {
      result = result.filter((item) =>
        selectedProvinces.includes(item.ubicacion.provincia)
      );
    }

    setFilteredOrganizations(result);
  }, [search, selectedProvinces, organizations]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
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
                {filteredOrganizations.map(
                  ({ fotoPerfil, nombre, descripcion, ubicacion }, index) => (
                    <OrganizationCard
                      key={index}
                      fotoPerfil={fotoPerfil}
                      nombre={nombre}
                      descripcion={descripcion}
                      ubicacion={ubicacion}
                    />
                  )
                )}
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
                  <CheckBoxList
                    selectedProvinces={selectedProvinces}
                    setSelectedProvinces={setSelectedProvinces}
                  ></CheckBoxList>
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
