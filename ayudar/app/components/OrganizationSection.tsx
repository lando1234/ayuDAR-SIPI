import { FC } from "react";
import OrganizationCard from "./OrganizationCard";
import AvatarUno from '../icons/AvatarUno.png';
import AvatarDos from '../icons/AvatarDos.png';
import AvatarTres from '../icons/AvatarTres.png';

const OrganizationSection: FC = () => {
  const organizationsCards = [
    {
        avatar: AvatarUno.src,
        organization: "Comedor granito de arena",
        location: "Luján, Buenos Aires",
        description: "Somos una organización comunitaria dedicada a brindar asistencia alimentaria a personas en situación de vulnerabilidad. Estamos ubicados en una zona de alto riesgo social. Buscamos ofrecer una comida nutritiva y un espacio de contención a quienes más lo necesitan.",
    },
    {
        avatar: AvatarDos.src,
        organization: "Comedor Los Angelitos de Madre Rosa",
        location: "San Miguel, Buenos Aires",
        description: "Espacio de desarrollo integral donde brindamos comida y educación a niños y familias de Barrio El Faro y Cuartel II (Muñiz, San Miguel).",
    },
    {
        avatar: AvatarTres.src,
        organization: "Comedor Pancita llena, corazón contento",
        location: "Córdoba, Córdoba",
        description: "Un comedor donde se brinda comida, Amor y Talleres a los niños del Barrio General Paz.",
    }
  ]
  
    return (
    <section className="mt-2">
      <div className="space-y-4">
        {organizationsCards.map((card, index) => (
          <OrganizationCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};


export default OrganizationSection;