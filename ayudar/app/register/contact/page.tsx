"use client";

import RegisterBase from "@/app/components/register/RegisterBase";
import Link from "next/link";
import React, { useState } from "react";
import { FaImage, FaPlus, FaTimes } from "react-icons/fa";

const Contact = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
  };

  return (
    <RegisterBase
      progress={3}
      title="Registra tu comedor"
      subtitle="Personaliza tu perfil"
    >
      <form className="min-h-screen rounded-3xl bg-white p-6 rounded-b-lg w-full max-w-md text-gray-400 space-y-4">
        <div className="mb-6 text-center">
          <div className="relative w-24 h-24 mx-auto rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
            <FaPlus className="text-gray-400" />

            <input
              type="file"
              accept="image/*"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">Foto de perfil *</p>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Descripción del comedor *
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
          <div className="relative w-full border-dashed border-2 border-gray-300 rounded-lg p-4 text-center cursor-pointer">
            <FaImage className="mx-auto text-gray-400 mb-2" size={24} />
            <p className="text-gray-500">Upload a file or drag and drop</p>
            <p className="text-gray-400">PNG, JPG, JPEG up to 10MB</p>
            <input
              type="file"
              accept="image/*"
              multiple
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative w-24 h-24">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Selected ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  onClick={() => handleRemoveImage(index)}
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            href="congrats"
            type="submit"
            className="rounded-full mt-4 py-2 px-6 bg-green-200 text-green-800 font-semibold hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 border border-primary"
          >
            Finalizar
          </Link>
        </div>
      </form>
    </RegisterBase>
  );
};

export default Contact;
