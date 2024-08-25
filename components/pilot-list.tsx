import Image from "next/image";
import { FC } from "react";
import pilotProfileImage from "@/public/pilot-icon.png";

// Define the Pilot interface as used in HomePage
interface Pilot {
  id: number;
  name: string;
  profileImage: string;
  workExperience: number;
  location: {
    city: string;
    state: string;
    country: string;
  };
  geolocation: {
    latitude: number;
    longitude: number;
  };
}

// Define the props for PilotList
interface PilotListProps {
  pilots: Pilot[];
}

const PilotList: FC<PilotListProps> = ({ pilots }) => {
  return (
    <ul>
      {pilots.map((pilot) => (
        <li key={pilot.id} className="mb-4">
          <div className="flex items-center">
            <Image
              src={pilotProfileImage}
              alt={pilot.name}
              width={32}
              height={32}
              layout="fixed"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{pilot.name}</h3>
              <p className="text-sm">{pilot.workExperience} years experience</p>
              <p className="text-xs">
                {pilot.location.city}, {pilot.location.state},{" "}
                {pilot.location.country}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PilotList;
