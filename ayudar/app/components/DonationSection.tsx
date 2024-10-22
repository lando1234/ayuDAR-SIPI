// components/DonationSection.tsx
import { FC } from 'react';
import DonationCard from './DonationCard';
import AvatarUno from '../icons/AvatarUno.png';
import AlimentosPequenaIcon from '../icons/AlimentosPequenaIcon.png';
import IndumentariaPequenaIcon from '../icons/IndumentariaPequenaIcon.png';
import VoluntariadoPequenoIcon from '../icons/VoluntariadoPequenoIcon.png';

const DonationSection: FC = () => {
  const donationCards = [
    {
      avatar: AvatarUno.src,
      title: 'Colecta día del niño',
      date: '10 Julio 2022',
      organization: 'Comedor Granito de Arena',
      isCompleted: false,
      description: 'Estamos en la búsqueda de juguetes y dulces para armar bolsitas y regalarle a los chicos en su día! Es para la segunda semana de Agosto 🗓️',
      icons: [
        { src: AlimentosPequenaIcon.src, alt: 'Alimentos' },
        { src: IndumentariaPequenaIcon.src, alt: 'Indumentaria' }
      ]
    },
    {
      avatar: AvatarUno.src,
      title: 'Pasá un día con nosotros',
      date: '10 Julio 2022',
      organization: 'Comedor Granito de Arena',
      isCompleted: false,
      description: 'Estamos en la búsqueda de juguetes y dulces para armar bolsitas y regalarle a los chicos en su día! Es para la segunda semana de Agosto 🗓️',
      icons: [
        { src: VoluntariadoPequenoIcon.src, alt: 'Voluntariado' }
      ]
    },
    {
      avatar: AvatarUno.src,
      title: 'Juntamos fondos para renovar las mesas',
      date: '10 Julio 2022',
      organization: 'Comedor Granito de Arena',
      isCompleted: true,
      description: 'Estamos en la búsqueda de juguetes y dulces para armar bolsitas y regalarle a los chicos en su día! Es para la segunda semana de Agosto 🗓️',
      icons: [
        { src: AlimentosPequenaIcon.src, alt: 'Alimentos' },
        { src: IndumentariaPequenaIcon.src, alt: 'Indumentaria' },
        { src: VoluntariadoPequenoIcon.src, alt: 'Voluntariado' }
      ]
    }
  ];

  return (
    <section className="mt-2">
      <div className="space-y-4">
        {donationCards.map((card, index) => (
          <DonationCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default DonationSection;