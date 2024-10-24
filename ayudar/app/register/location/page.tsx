import React from 'react'

const Location = () => {
  return (
<div className="bg-primary max-w-md mx-auto mt-10 p-6  rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div className="text-left">
          <span className="text-green-600 font-bold text-lg">1 de 3</span>
          <p className="text-sm text-gray-600">Información general</p>
        </div>
        <div className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center">
          <span className="text-green-600 font-bold"><img src="" alt="" /></span>
        </div>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comedor">
            Nombre del comedor *
          </label>
          <input
            id="comedor"
            type="text"
            placeholder="Nombre del comedor"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reNaCom">
            ID ReNaCom *
          </label>
          <input
            id="reNaCom"
            type="text"
            placeholder="ID ReNaCom"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="provincia">
              Provincia *
            </label>
            <select
              id="provincia"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Seleccionar</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Córdoba">Córdoba</option>
              {/* Agregar más opciones */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postal">
              Cod. Postal *
            </label>
            <input
              id="postal"
              type="text"
              placeholder="Cod. Postal"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="localidad">
            Partido / Localidad *
          </label>
          <input
            id="localidad"
            type="text"
            placeholder="Partido / Localidad"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domicilio">
            Domicilio *
          </label>
          <input
            id="domicilio"
            type="text"
            placeholder="Domicilio"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Continuar
        </button>
      </form>
    </div>  )
}

export default Location;