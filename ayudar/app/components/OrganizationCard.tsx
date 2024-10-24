import { FC } from "react";
import Vector from '../icons/Vector.png';

interface OrganizationCard {
    avatar: string;
    organization: string;
    description: string;
    location: string;
  }

const OrganizationCard : FC<OrganizationCard> = ({
  avatar,
  organization,
  description,
  location
}) => {

    return(
      <div className="bg-white shadow rounded-lg p-4 flex items-start">
      <img src={avatar} alt="Avatar" className="h-8 mr-3 mt-2" />
      <div>
        <h3 className="font-bold text-black">{organization}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>
                  <img 
                    src={Vector.src} alt="Location"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>{location}</span>
              </div>
        <div className="mt-2">
          <p className="text-sm text-[#1C252E]">{description}</p>
        </div>
      </div>
    </div>
    )
}

export default OrganizationCard;