import { FC } from "react";
import Vector from '../icons/Vector.png';

export interface Organization {
    avatar: string;
    name: string;
    description: string;
    city : string;
    province: string;
  }

const OrganizationCard : FC<Organization> = ({
  avatar,
  name,
  description,
  city,
  province
}) => {

    return(
      <div className="bg-white shadow rounded-lg p-4 flex items-start">
      <img src={avatar} alt="Avatar" className="h-8 mr-3 mt-2" />
      <div>
        <h3 className="font-bold text-black">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>
                  <img 
                    src={Vector.src} alt="Location"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>{city},{province}</span>
              </div>
        <div className="mt-2">
          <p className="text-sm text-[#1C252E]">{description}</p>
        </div>
      </div>
    </div>
    )
}

export default OrganizationCard;