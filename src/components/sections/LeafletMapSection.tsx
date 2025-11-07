"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import L from "leaflet";
import { MapPin } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

// Venue data (placeholder coordinates - replace with actual)
const venues = [
  {
    id: 1,
    name: "SPICE EVENT CENTRE",
    description: "Engagement & Reception Venue",
    address: "Plot 3, 1st Avenue, Ibara Housing Estate, Ibara, Abeokuta",
    coordinates: [7.1338361113437685, 3.3385817351199507] as [number, number], // [latitude, longitude]
  },
  {
    id: 2,
    name: "Judah Family Mega Parish (RCCG)",
    description: "Church Service",
    address: "4/5 Mercy Group Clinic Road, Abeokuta, Ogun Province 1",
    coordinates: [7.133798933169063, 3.331054548787256] as [number, number], // [latitude, longitude]
  },
];

// Create custom icon using Lucide React MapPin
const createCustomIcon = (color: string) => {
  const iconMarkup = renderToStaticMarkup(
    <div className="relative">
      <MapPin
        size={40}
        color={color}
        fill={color}
        fillOpacity={0.1}
        strokeWidth={2}
      />
    </div>
  );

  return L.divIcon({
    html: iconMarkup,
    className: "custom-marker",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

const LeafletMapSection = () => {
  return (
    <section
      id="map"
      className="relative z-10 bg-white py-16 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-play-fair)] text-2xl md:text-3xl text-gray-800 font-semibold mb-2">
            Venue Locations
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Find your way to our special day
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg overflow-hidden">
          <MapContainer
            center={venues[0].coordinates}
            zoom={14}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {venues.map((venue) => (
              <Marker
                key={venue.id}
                position={venue.coordinates}
                icon={createCustomIcon(venue.id === 1 ? "#f59e0b" : "#84cc16")}
              >
                <Popup>
                  <div className="min-w-[200px] max-w-[300px]">
                    <h3 className="font-bold text-gray-800 mb-1">
                      {venue.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {venue.description}
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      {venue.address}
                    </p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${venue.coordinates[0]},${venue.coordinates[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-amber-500 hover:bg-amber-600 text-white text-sm py-2 px-4 rounded-sm transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Venue List - Mobile Friendly Alternative */}
        <div className="mt-8 space-y-4">
          {venues.map((venue) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-4 rounded-lg border border-gray-100"
            >
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full mt-1.5 bg-amber-500" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{venue.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {venue.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{venue.address}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${venue.coordinates[0]},${venue.coordinates[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white text-sm py-2 px-4 rounded-sm mt-3 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LeafletMapSection;
