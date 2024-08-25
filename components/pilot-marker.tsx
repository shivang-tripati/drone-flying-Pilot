"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

interface PilotMarkerProps {
  pilot: {
    id: number;
    name: string;
    profileImage: string;
    workExperience: number;
    geolocation: {
      latitude: number;
      longitude: number;
    };
    location: {
      city: string;
      state: string;
      country: string;
    };
  };
}

const PilotMarker: React.FC<PilotMarkerProps> = ({ pilot }) => {
  const customIcon = new L.Icon({
    iconUrl: "/pilot-icon.png",
    iconSize: [64, 64],
    iconAnchor: [32, 48],
    popupAnchor: [0, -32],
  });

  return (
    <Marker
      position={[pilot.geolocation.latitude, pilot.geolocation.longitude]}
      icon={customIcon}
    >
      <Popup>
        <div>
          <h3>{pilot.name}</h3>
          <p>Work Experience: {pilot.workExperience} years</p>
          <p>
            Location: {pilot.location.city}, {pilot.location.state},{" "}
            {pilot.location.country}
          </p>
        </div>
      </Popup>
    </Marker>
  );
};

export default PilotMarker;
