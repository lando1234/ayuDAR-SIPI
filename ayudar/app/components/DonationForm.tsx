import React, { useState } from 'react';

const DonationForm = () => {
  const [email, setEmail] = useState('');
  const [donationTypes, setDonationTypes] = useState<string[]>([]);
  const [zone, setZone] = useState('');
  const [errors, setErrors] = useState({ email: '' });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleDonationTypeChange = (type: string) => {
    setDonationTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type)
        : [...prevTypes, type]
    );
  };

  const handleZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setZone(e.target.value);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrors({ email: 'Por favor, ingrese un correo electrónico válido.' });
      return;
    }
    setErrors({ email: '' });
    console.log('Formulario enviado:', { email, donationTypes, zone });
  };

  return (
<form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Correo Electrónico
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={email}
      onChange={handleEmailChange}
      placeholder="ejemplo@mail.com"
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-black placeholder-black"
    />
    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
  </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tipo de Donación
        </label>
        <div className="flex flex-wrap gap-2">
        {['Comida', 'Ropa', 'Dinero', 'Voluntariado'].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer text-black">
            <input
                type="checkbox"
                checked={donationTypes.includes(type)}
                onChange={() => handleDonationTypeChange(type)}
            />
            <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </label>
        ))}
        </div>
      </div>

      <div>
        <label htmlFor="zone" className="block text-sm font-medium text-gray-700">
          Zona
        </label>
        <select
          id="zone"
          name="zone"
          value={zone}
          onChange={handleZoneChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Selecciona tu zona</option>
          <option value="north">Norte</option>
          <option value="south">Sur</option>
          <option value="east">Este</option>
          <option value="west">Oeste</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Enviar
      </button>
    </form>
  );
};

export default DonationForm;