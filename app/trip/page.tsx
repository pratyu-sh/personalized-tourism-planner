'use client';

import React, { useEffect, useState } from 'react';
import { Trash2, MapPin } from 'lucide-react';

export default function TripPage() {
  const [tripList, setTripList] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('tripList');
    if (saved) setTripList(JSON.parse(saved));
  }, []);

  const removePlace = (id: string) => {
    const updated = tripList.filter((p) => p.id !== id);
    setTripList(updated);
    localStorage.setItem('tripList', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Your Trip Plan</h1>

      {tripList.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No places added yet.</p>
      ) : (
        <div className="space-y-4">
          {tripList.map((place) => (
            <div
              key={place.id}
              className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{place.name}</h2>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    <span className="text-sm">{place.location}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removePlace(place.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
