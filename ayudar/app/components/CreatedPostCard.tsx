import { FC, useState } from 'react';
import AvatarUno from '../icons/AvatarUno.png';
import DonationCard from './DonationCard';
import { AiOutlineFileImage } from 'react-icons/ai';
import { IoMdSend } from 'react-icons/io';
import dineroPequeño from '../icons/DineroIconPequeño.png';
import comidaPequeño from '../icons/AlimentosPequenaIcon.png';
import voluntariadoPequeño from '../icons/VoluntariadoPequenoIcon.png';
import ropaPequeño from '../icons/IndumentariaPequenaIcon.png';

const CreatePostCard: FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [donationTypes, setDonationTypes] = useState<string[]>([]); // Cambiado a un array para selección múltiple
  const [isFocused, setIsFocused] = useState(false);

  // Estado para almacenar todas las publicaciones
  const [posts, setPosts] = useState<Array<{ title: string; content: string; date: string; donationTypes: string[]; isCompleted: boolean }>>([]);

  const donationImages: { [key: string]: string } = {
    voluntariado: voluntariadoPequeño.src,
    fondos: dineroPequeño.src,
    comida: comidaPequeño.src,
    ropa: ropaPequeño.src,
  };

  const handleDonationTypeChange = (type: string) => {
    setDonationTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type) // Quita el tipo si ya está seleccionado
        : [...prevTypes, type] // Agrega el tipo si no está seleccionado
    );
  };

  const handlePostSubmit = () => {
    if (title.trim() && content.trim() && donationTypes.length > 0) {
      const currentDate = new Date().toLocaleDateString();

      // Agregar la nueva publicación al array de publicaciones con los tipos de donación seleccionados
      setPosts([...posts, { title, content, date: currentDate, donationTypes, isCompleted: false }]);

      // Limpiar los campos del formulario
      setTitle('');
      setContent('');
      setDonationTypes([]); // Reiniciar las selecciones de tipos de donación
    }
  };

  return (
    <div>
      {/* Formulario para crear un post */}
      <div className="bg-white p-4 rounded-lg shadow-md border flex flex-col gap-4 mb-4">
        {/* Header: Avatar y nombre */}
        <div className="flex items-center gap-3">
          <img
            src={AvatarUno.src}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h3 className="font-medium text-gray-800">Comedor Granito de Arena</h3>
        </div>

        {/* Título */}
        <input
          type="text"
          placeholder={isFocused ? '' : 'Escribe el título...'}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 ${isFocused ? 'text-black' : 'text-gray-500'}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Tipo de donación (selección múltiple) */}
        <div className="flex flex-wrap gap-2">
          {Object.keys(donationImages).map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={donationTypes.includes(type)}
                onChange={() => handleDonationTypeChange(type)}
              />
              <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </label>
          ))}
        </div>

        {/* Área de contenido */}
        <div className="border rounded-lg p-2">
          <textarea
            className={`w-full p-2 resize-none focus:outline-none ${isFocused ? 'text-black' : 'text-gray-500'}`}
            rows={3}
            placeholder={isFocused ? '' : 'Haz tu pedido a la comunidad'}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        {/* Área de controles */}
        <div className="flex items-center justify-between mt-2">
          <AiOutlineFileImage className="text-xl cursor-pointer" />
          <button
            onClick={handlePostSubmit}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Publicar <IoMdSend />
          </button>
        </div>
      </div>

      {/* Timeline: Renderizar las publicaciones */}
      <div className="space-y-4">
        {posts.map((post, index) => (
          <DonationCard
            key={index}
            avatar={AvatarUno.src}
            title={post.title}
            date={post.date}
            organization="Comedor Granito de Arena"
            isCompleted={post.isCompleted}
            description={`${post.content} \nTipo de donación: ${post.donationTypes.join(', ')}`}
            icons={post.donationTypes.map((type) => ({ src: donationImages[type], alt: type }))}

          />
        ))}
      </div>
    </div>
  );
};

export default CreatePostCard;
