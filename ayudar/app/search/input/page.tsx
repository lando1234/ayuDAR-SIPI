import Header from "@/app/components/Header";
import React, { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logoLetras from "../../icons/LogoLetras.png";
import logo from "../../icons/Logo.png";
import noConnection from "../images/noConnection.png";
import CheckIncompleto from "../../icons/CheckIncompletoIcon.png";
import CheckCompleto from "../../icons/CheckCompletoIcon.png";
import AvatarUno from "../../icons/AvatarUno.png";
import VoluntariadoPequenoIcon from "../../icons/VoluntariadoPequenoIcon.png";
import OrganizationCard from "@/app/components/OrganizationCard";
import OrganizationSection from "@/app/components/OrganizationSection";
import CheckBoxList from "@/app/components/CheckBoxList";

const Search = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  


  //Despues sacar
  const [showCards, setShowCards] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    /*Despues sacar*/
    if (event.target.value.length == 0) {
      setShowCards(false);
    } else {
      setShowCards(true);
    }
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
        {!showCards ? (
          <div className="bg-white flex items-center justify-center flex-col h-96">
            <FaMagnifyingGlass className="text-primary" size={80} />
            <span className="text-gray-400 mt-3">Descubre comedores</span>
          </div>
        ) : (
          <OrganizationSection />
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
