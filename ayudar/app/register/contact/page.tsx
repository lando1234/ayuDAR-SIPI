import React from 'react'
import { FaImage, FaPlus } from 'react-icons/fa';

const Contact = () => {

  return (
 <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div className="text-left">
          <span className="text-green-600 font-bold text-lg">3 de 3</span>
          <p className="text-sm text-gray-600">Personalizar su perfil</p>
        </div>
        <div className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center">
          <span className="text-yellow-600 font-bold">🟡</span>
        </div>
      </div>

      <form>
        <div className="mb-6 text-center">
          <div className="relative w-24 h-24 mx-auto rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
            
              <FaPlus className="text-gray-400" />
      
            <input
              type="file"
              accept="image/*"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">Foto de perfil</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Descripción del comedor
          </label>
          <textarea
            id="description"
            placeholder="Descripción del comedor"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={4}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Imágenes del comedor
          </label>
          <div className="w-full border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
            <FaImage className="mx-auto text-gray-400 mb-2" size={24} />
            <p className="text-gray-500">Upload a file or drag and drop</p>
            <p className="text-gray-400">PNG, JPG, JPEG up to 10MB</p>
            <input
              type="file"
              accept="image/*"
              className="mt-2 block w-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Finalizar
        </button>
      </form>
    </div>  )
}

export default Contact;