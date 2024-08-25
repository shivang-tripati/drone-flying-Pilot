import React from "react";

interface PilotProfileProps {
  pilot: Pilot;
}

interface Pilot {
  profileImage: string;
  name: string;
  workExperience: number;
  location: {
    city: string;
    state: string;
    country: string;
  };
}

const PilotProfile: React.FC<PilotProfileProps> = ({ pilot }) => {
  return (
    <div className="fixed bottom-4 right-4 w-72 h-72 p-4 border rounded-lg shadow-md bg-white overflow-hidden z-50">
      <img
        src={pilot.profileImage}
        alt={pilot.name}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-4">{pilot.name}</h2>
      <p className="text-center mt-2">
        {pilot.workExperience} years of experience
      </p>
      <p className="text-center mt-2">
        {pilot.location.city}, {pilot.location.state}, {pilot.location.country}
      </p>
    </div>
  );
};

export default PilotProfile;
