'use client';
import React from 'react';
import { MapPin } from 'lucide-react';

export const PlaceCard = ({ id, title, location, imageUrl, onAdd }: any) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-gray-500 flex items-center text-sm">
        <MapPin size={14} className="mr-1" /> {location}
      </p>
      <button
        onClick={onAdd}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Trip
      </button>
    </div>
  </div>
);

export default PlaceCard;
