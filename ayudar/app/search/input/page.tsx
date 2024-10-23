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

const Search = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
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
    </div>
  );
};

export default Search;
