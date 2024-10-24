import { FC, useState } from 'react';
import AvatarUno from '../icons/AvatarUno.png';
import { FiBold, FiItalic, FiUnderline, FiAlignLeft, FiAlignCenter, FiAlignRight } from 'react-icons/fi';
import { AiOutlineFileImage } from 'react-icons/ai';
import { IoMdSend } from 'react-icons/io';

const CreatePostCard: FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('Estado');

  const handlePostSubmit = () => {
    if (title.trim() && content.trim()) {
      console.log('Nueva publicación:', { title, content, status });
      // Lógica para enviar la publicación al backend.
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border flex flex-col gap-4">
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
        placeholder="Escribe el título..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-gray-600 w-full border-b border-gray-300 focus:outline-none focus:border-gray-500"
      />

      {/* Área de contenido con opciones de formato */}
      <div className="border rounded-lg p-2">
        <div className="flex items-center gap-2 mb-2">
          <FiBold className="cursor-pointer" />
          <FiItalic className="cursor-pointer" />
          <FiUnderline className="cursor-pointer" />
          <FiAlignLeft className="cursor-pointer" />
          <FiAlignCenter className="cursor-pointer" />
          <FiAlignRight className="cursor-pointer" />
        </div>
        <textarea
          className="w-full p-2 resize-none focus:outline-none text-gray-600"
          rows={3}
          placeholder="Haz tu pedido a la comunidad"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* Área de controles: Imagen, Estado y botón Publicar */}
      <div className="flex items-center justify-between mt-2">
        <AiOutlineFileImage className="text-xl cursor-pointer" />

        <div className="relative">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none"
          >
            <option value="Estado" disabled>
              Estado
            </option>
            <option value="Borrador">Borrador</option>
            <option value="Publicado">Publicado</option>
          </select>
        </div>

        <button
          onClick={handlePostSubmit}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Publicar <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default CreatePostCard;
