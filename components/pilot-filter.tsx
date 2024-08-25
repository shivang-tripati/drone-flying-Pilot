import React, { useState } from "react";
import axios from "axios";

interface PilotFormProps {
  onFetchPilots: (pilots: any[]) => void;
}

const PilotForm: React.FC<PilotFormProps> = ({ onFetchPilots }) => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [range, setRange] = useState<number>(1000); // Default range in km
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const validateInputs = (): boolean => {
    if (latitude < -90 || latitude > 90) {
      setError("Latitude must be between -90 and 90.");
      return false;
    }
    if (longitude < -180 || longitude > 180) {
      setError("Longitude must be between -180 and 180.");
      return false;
    }
    if (range <= 0) {
      setError("Range must be a positive number.");
      return false;
    }
    return true;
  };

  const fetchPilots = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("/api/filter-pilots", {
        params: { latitude, longitude, range },
      });
      onFetchPilots(response.data);
    } catch (err) {
      setError("Failed to fetch pilots.");
    } finally {
      setLoading(false);
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
          disabled={loading}
        >
          {loading ? "Loading..." : "Find Pilots"}
        </button>
      </div>
    </div>
  );
};

export default PilotForm;
