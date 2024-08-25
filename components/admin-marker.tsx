"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

interface AdminMarkerProps {
  position: [number, number];
}

const AdminMarker: React.FC<AdminMarkerProps> = ({ position }) => {
  const customIcon = new L.Icon({
    iconUrl: "/admin-icon.png", // Path to your admin icon image
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <Marker position={position} icon={customIcon}>
      <Popup>
        <div>
          <h3>Admin</h3>
          <p>This is your current location.</p>
        </div>
      </Popup>
    </Marker>
  );
};

export default AdminMarker;
