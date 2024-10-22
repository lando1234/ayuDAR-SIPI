// components/DonationCard.tsx
import { FC } from 'react';
import CheckIncompleto from '../icons/CheckIncompletoIcon.png';
import CheckCompleto from '../icons/CheckCompletoIcon.png';

interface DonationCardProps {
  avatar: string;
  title: string;
  date: string;
  organization: string;
  isCompleted: boolean;
  description: string;
  icons: Array<{
    src: string;
    alt: string;
  }>;
}

const DonationCard: FC<DonationCardProps> = ({
  avatar,
  title,
  date,
  organization,
  isCompleted,
  description,
  icons
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-start">
      <img src={avatar} alt="Avatar" className="h-8 mr-3 mt-2" />
      <div>
        <h3 className="font-bold text-black">{title}</h3>
        <p className="text-xs text-[#919EAB]">
          {date} - {organization}
        </p>
        <div className="flex items-center mt-2">
          <img 
            src={isCompleted ? CheckCompleto.src : CheckIncompleto.src} 
            alt={isCompleted ? "Check Completo" : "Check Incompleto"} 
            className="h-4 w-4 mr-2" 
          />
          <p className={`text-sm ${isCompleted ? 'text-[#1E8F62]' : 'text-[#6AB8E2]'}`}>
            {isCompleted ? '¡Meta completada!' : 'Todavía podes ayudar en este pedido'}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-sm text-[#1C252E]">{description}</p>
          <div className="flex mt-2 space-x-2">
            {icons.map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} className="h-4 w-4" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;