import { FC, useState } from 'react';
import AvatarUno from '../icons/AvatarUno.png';
import DonationCard from './DonationCard'; // Importamos el componente DonationCard
import { AiOutlineFileImage } from 'react-icons/ai';
import { IoMdSend } from 'react-icons/io';

const CreatePostCard: FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [donationType, setDonationType] = useState('voluntariado'); // Nuevo estado para el tipo de donación
  const [isFocused, setIsFocused] = useState(false);

  // Estado para almacenar todas las publicaciones
  const [posts, setPosts] = useState<Array<{ title: string; content: string; date: string; donationType: string; isCompleted: boolean }>>([]);

  const handlePostSubmit = () => {
    if (title.trim() && content.trim()) {
      const currentDate = new Date().toLocaleDateString(); // Obtener la fecha actual

      // Agregar la nueva publicación al array de publicaciones con estado 'Activo'
      setPosts([...posts, { title, content, date: currentDate, donationType, isCompleted: false }]);

      // Limpiar los campos del formulario
      setTitle('');
      setContent('');
      setDonationType('voluntariado'); // Reiniciar el valor del tipo de donación al valor predeterminado
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

        {/* Tipo de donación */}
        <select
          value={donationType}
          onChange={(e) => setDonationType(e.target.value)}
          className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 text-gray-700 py-2"
        >
          <option value="voluntariado">Voluntariado</option>
          <option value="fondos">Fondos</option>
          <option value="comida">Comida</option>
          <option value="ropa">Ropa</option>
        </select>

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
            description={`${post.content} \nTipo de donación: ${post.donationType}`} // Añadimos el tipo de donación a la descripción
            icons={[]} // Puedes agregar más íconos aquí
          />
        ))}
      </div>
    </div>
  );
};

export default CreatePostCard;
