"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import PilotFilter from "@/components/pilot-filter";
import PilotForm from "@/components/pilot-form";
import PilotList from "@/components/pilot-list";
import PilotProfile from "@/components/pilot-profile"; // Import the PilotProfile component
import { Pilot } from "@/types"; // Adjust the path as needed

const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function HomePage() {
  const [pilots, setPilots] = useState<Pilot[]>([]);
  const [searchMethod, setSearchMethod] = useState<"filter" | "form">("filter");
  const [selectedPilot, setSelectedPilot] = useState<Pilot | null>(null); // State to manage selected pilot

  const handleFetchPilots = (fetchedPilots: Pilot[]) => {
    setPilots(fetchedPilots);
    if (fetchedPilots.length > 0) {
      setSelectedPilot(fetchedPilots[0]); // Automatically select the first pilot
    }
  };

  const handleSearchMethodChange = (method: "filter" | "form") => {
    setSearchMethod(method);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Pilot Matching and Filtering
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 md:pr-4 mb-6 md:mb-0">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => handleSearchMethodChange("filter")}
              className={`py-2 px-4 rounded ${
                searchMethod === "filter"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Filter By Range
            </button>
            <button
              onClick={() => handleSearchMethodChange("form")}
              className={`py-2 px-4 rounded ${
                searchMethod === "form"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Search By Location
            </button>
          </div>
          {searchMethod === "filter" && (
            <PilotFilter onFetchPilots={handleFetchPilots} />
          )}
          {searchMethod === "form" && (
            <PilotForm onFetchPilots={handleFetchPilots} />
          )}
        </div>
        <div className="md:w-2/3 md:pl-4">
          <Map pilots={pilots} />
        </div>
      </div>
      <div className="w-full mt-4">
        <PilotList pilots={pilots} />
      </div>
      {selectedPilot && <PilotProfile pilot={selectedPilot} />}{" "}
      {/* Display the PilotProfile component */}
    </div>
  );
}
