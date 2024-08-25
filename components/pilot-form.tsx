import React, { useState } from "react";
import axios from "axios";

interface PilotFormProps {
  onFetchPilots: (pilots: any[]) => void;
}

const PilotForm: React.FC<PilotFormProps> = ({ onFetchPilots }) => {
  const [latitude, setLatitude] = useState<number>(0); // Example default
  const [longitude, setLongitude] = useState<number>(0); // Example default
  const [range, setRange] = useState<number>(1000); // Default range in km
  const [error, setError] = useState<string | null>(null);

  const fetchPilots = async () => {
    try {
      const response = await axios.get("/api/filter-pilots", {
        params: { latitude, longitude, range },
      });
      onFetchPilots(response.data);
    } catch (err) {
      setError("Failed to fetch pilots");
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Find Pilots by Location</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Latitude</label>
          <input
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(Number(e.target.value))}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter latitude"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Longitude</label>
          <input
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(Number(e.target.value))}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter longitude"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Range (km)</label>
          <input
            type="number"
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter range"
          />
        </div>
        <button
          onClick={fetchPilots}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Find Pilots
        </button>
      </div>
    </div>
  );
};

export default PilotForm;
