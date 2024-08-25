"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Pilot } from "@/types";

interface MapProps {
  pilots: Pilot[];
}

const defaultIcon = L.icon({
  iconUrl: "/pilot-icon.png", // Replace with your icon path
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map: React.FC<MapProps> = ({ pilots }) => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    28.6139, 77.209,
  ]); // Default center

  const [filteredPilots, setFilteredPilots] = useState<Pilot[]>(pilots);

  // Function to validate latitude and longitude
  const isValidLatLng = (
    lat: number | undefined,
    lng: number | undefined
  ): boolean => {
    return lat !== undefined && lng !== undefined && !isNaN(lat) && !isNaN(lng);
  };

  useEffect(() => {
    // Dynamically set the center of the map to the first pilot's location
    if (
      filteredPilots.length > 0 &&
      isValidLatLng(
        filteredPilots[0].geolocation.latitude,
        filteredPilots[0].geolocation.longitude
      )
    ) {
      setMapCenter([
        filteredPilots[0].geolocation.latitude,
        filteredPilots[0].geolocation.longitude,
      ]);
    }
  }, [filteredPilots]);

  useEffect(() => {
    setFilteredPilots(pilots);
  }, [pilots]);

  return (
    <MapContainer
      center={mapCenter}
      zoom={10}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {filteredPilots.map((pilot) => {
        const { id, name, workExperience, geolocation } = pilot;
        const { latitude, longitude } = geolocation;

        if (isValidLatLng(latitude, longitude)) {
          return (
            <Marker
              key={id}
              position={[latitude, longitude]}
              icon={defaultIcon}
            >
              <Popup>
                <strong>{name}</strong>
                <br />
                {workExperience} years of experience
              </Popup>
            </Marker>
          );
        }
        return null;
      })}
    </MapContainer>
  );
};

export default Map;
