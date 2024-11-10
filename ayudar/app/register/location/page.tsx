"use client";

import React, { useState } from "react";
import RegisterBase from "@/app/components/register/RegisterBase";
//import Link from "next/link";
import { FaTimes, FaEnvelope, FaFacebookF, FaGlobe, FaInstagram, FaLock, FaPhone, FaImage, FaPlus, FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [nombre, setNombre] = useState("");
  const [idRenacom, setIdRenacom] = useState("");
  const [provincia, setProvincia] = useState("");
  const [codPostal, setCodPostal] = useState("");
  const [partido, setPartido] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [paginaWeb, setPaginaWeb] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState<File | null>(null);
  const [descripcion, setDescripcion] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    minLength: false,
    hasUpperCase: false,
    hasNumber: false,
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const validarPaso1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!nombre) newErrors.nombre = "Campo obligatorio";
    if (!idRenacom) newErrors.idRenacom = "Campo obligatorio";
    if (!provincia) newErrors.provincia = "Campo obligatorio";
    if (!codPostal) newErrors.codPostal = "Campo obligatorio";
    if (!partido) newErrors.partido = "Campo obligatorio";
    if (!domicilio) newErrors.domicilio = "Campo obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validarPaso2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!email) {
      newErrors.email = "Campo obligatorio";
    } else if (!email.includes("@")) {
      newErrors.email = "Ingrese un email válido";
    }
    if (!telefono) newErrors.telefono = "Campo obligatorio";
    if (!password) {
      newErrors.password = "Campo obligatorio";
    } else if (password !== repeatPassword) {
      newErrors.password = "Las contraseñas no coinciden";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validarPaso3 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fotoPerfil) newErrors.fotoPerfil = "Debe cargar una foto de perfil.";
    if (!descripcion) {
      newErrors.descripcion = 'Campo obligatorio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (e: React.MouseEvent) => {
    setHasSubmitted(true);
    if (currentStep === 1 && !validarPaso1()) {
      e.preventDefault();
      return;
    }
    if (currentStep === 2 && !validarPaso2()) {
      e.preventDefault();
      return;
    }
    if (currentStep === 3 && !validarPaso3()) {
      e.preventDefault();
      return;
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValidations({
      minLength: value.length >= 8,
      hasUpperCase: /[A-Z]/.test(value),
      hasNumber: /\d/.test(value),
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (validarPaso3()) {
      window.location.href = '/congrats';
    } else {
      window.location.href = '/error';
    }
  };

  return (
    <RegisterBase
      progress={currentStep}
      title="Registra tu comedor"
      subtitle={
        currentStep === 1
          ? "Información general"
          : currentStep === 2
            ? "Datos del perfil"
            : "Personaliza tu perfil"
      }
    >
      {currentStep === 1 && (
        <form className="min-h-screen rounded-3xl bg-white p-6 rounded-b-lg w-full max-w-md text-gray-400 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="nombre">
              Nombre del comedor *
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {hasSubmitted && errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="idRenacom">
              ID ReNaCom *
            </label>
            <input
              type="text"
              id="idRenacom"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={idRenacom}
              onChange={(e) => setIdRenacom(e.target.value)}
            />
            {hasSubmitted && errors.idRenacom && (
              <p className="text-red-500 text-sm mt-1">{errors.idRenacom}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="provincia">
              Provincia *
            </label>
            <select
              id="provincia"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
            >
              <option value="">Seleccione una provincia</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
              <option value="Córdoba">Córdoba</option>
            </select>
            {hasSubmitted && errors.provincia && (
              <p className="text-red-500 text-sm mt-1">{errors.provincia}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="codPostal">
              Código Postal *
            </label>
            <input
              type="text"
              id="codPostal"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={codPostal}
              onChange={(e) => setCodPostal(e.target.value)}
            />
            {hasSubmitted && errors.codPostal && (
              <p className="text-red-500 text-sm mt-1">{errors.codPostal}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="partido">
              Localidad *
            </label>
            <input
              type="text"
              id="partido"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={partido}
              onChange={(e) => setPartido(e.target.value)}
            />
            {hasSubmitted && errors.partido && (
              <p className="text-red-500 text-sm mt-1">{errors.partido}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="domicilio">
              Domicilio *
            </label>
            <input
              type="text"
              id="domicilio"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
            />
            {hasSubmitted && errors.domicilio && (
              <p className="text-red-500 text-sm mt-1">{errors.domicilio}</p>
            )}
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleNextStep}
              className="rounded-full mt-4 py-2 px-6 bg-green-200 text-green-800 font-semibold hover:bg-green-300"
            >
              Continuar
            </button>
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <form className="min-h-screen rounded-3xl bg-white p-6 rounded-b-lg w-full max-w-md text-gray-400 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Correo Electrónico *
            </label>
            <div className="flex items-center">
              <div className="border border-gray-300 p-3 rounded-l-lg">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {hasSubmitted && errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Contraseña *
            </label>
            <div className="flex items-center">
              <div className="border border-gray-300 p-3 rounded-l-lg">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="border-t border-b border-r border-gray-300 p-3 rounded-r-lg focus:outline-none"
              >
                {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
              </button>
            </div>
            {hasSubmitted && errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
            <div className="mt-2">
              <p className="text-sm text-gray-500">Tu contraseña necesita:</p>
              <p className={`pl-4 text-sm ${passwordValidations.minLength ? 'text-green-500' : 'text-red-500'}`}>
                Tener un mínimo de 8 caracteres de largo
              </p>
              <p className={`pl-4 text-sm ${passwordValidations.hasNumber ? 'text-green-500' : 'text-red-500'}`}>
                Incluir al menos una letra mayúscula
              </p>
              <p className={`pl-4 text-sm ${passwordValidations.hasUpperCase ? 'text-green-500' : 'text-red-500'}`}>
                Incluir al menos un número
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="repeatPassword">
              Repetir contraseña *
            </label>
            <div className="flex items-center">
              <div className="border border-gray-300 p-3 rounded-l-lg">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showRepeatPassword ? 'text' : 'password'}
                id="repeatPassword"
                className="w-full px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={toggleRepeatPasswordVisibility}
                className="border-t border-b border-r border-gray-300 p-3 rounded-r-lg focus:outline-none"
              >
                {showRepeatPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
              </button>
            </div>
            {hasSubmitted && errors.repeatPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.repeatPassword}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="telefono">
              Teléfono *
            </label>
            <div className="flex items-center">
              <div className="border border-gray-300 p-3 rounded-l-lg">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="text"
                id="telefono"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              /></div>
            {hasSubmitted && errors.telefono && (
              <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="facebook">
              Facebook
            </label>
            <div className="flex items-center">
              <div className="border border-gray-300 p-3 rounded-l-lg">
                <FaFacebookF className="text-gray-400" />
              </div>
              <input
                type="text"
                id="facebook"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              /></div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="instagram">
              Instagram
            </label>
            <div className="flex items-center">
              <div className="border border-gray-300 p-3 rounded-l-lg">
                <FaInstagram className="text-gray-400" />
              </div>
              <input
                type="text"
                id="instagram"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              /></div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="paginaWeb">
              Página Web
            </label>
            <div className="flex items-center">
              <div className="border border-gray-300 p-3 rounded-l-lg">
                <FaGlobe className="text-gray-400" />
              </div>
              <input
                type="text"
                id="paginaWeb"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                value={paginaWeb}
                onChange={(e) => setPaginaWeb(e.target.value)}
              /></div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handlePrevStep}
              className="rounded-full mt-4 py-2 px-6 bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={handleNextStep}
              className="rounded-full mt-4 py-2 px-6 bg-green-200 text-green-800 font-semibold hover:bg-green-300"
            >
              Continuar
            </button>
          </div>
        </form>
      )}

      {currentStep === 3 && (
        <form onSubmit={handleSubmit} className="min-h-screen rounded-3xl bg-white p-6 rounded-b-lg w-full max-w-md text-gray-400 space-y-4">
          <div className="mb-6 text-center">
            <label className="block text-sm font-medium mb-1" htmlFor="fotoPerfil">
              Foto de perfil *
            </label>
            <div className="relative w-24 h-24 mx-auto rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
              <FaPlus className="text-gray-400" />
              {fotoPerfil && (
                <img
                  src={URL.createObjectURL(fotoPerfil)}
                  alt="Foto de perfil"
                  className="w-full h-full object-cover rounded-full"
                />
              )}

              <input
                type="file"
                id="fotoPerfil"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => setFotoPerfil(e.target.files ? e.target.files[0] : null)}
              />
            </div>
            {hasSubmitted && errors.fotoPerfil && (
              <p className="text-red-500 text-sm mt-1">{errors.fotoPerfil}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="descripcion">
              Descripción del comedor *
            </label>
            <textarea
              id="descripcion"
              placeholder="Descripción del comedor"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
            {hasSubmitted && errors.descripcion && (
              <p className="text-red-500 text-sm mt-1">{errors.descripcion}</p>
            )}
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

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handlePrevStep}
              className="rounded-full mt-4 py-2 px-6 bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"
            >
              Anterior
            </button>
            <button
              type="submit"
              
              className="rounded-full mt-4 py-2 px-6 bg-green-200 text-green-800 font-semibold hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 border border-primary"
            >
              Finalizar
            </button>
          </div>
        </form>
      )}
    </RegisterBase>
  );
};

export default RegisterStepper;
