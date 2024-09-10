// src/components/Map.tsx

"use client";

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'; 

const Map: React.FC = () => {
  const position: [number, number] = [30.3753, 69.3451]; 

  return (
    <MapContainer center={position} zoom={6} scrollWheelZoom={false} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
