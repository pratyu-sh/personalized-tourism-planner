'use client';
import React from 'react';
import { MapPin, X } from 'lucide-react';
import { useTripStore } from './store';

const TripCard = ({ id, title, location, imageUrl }: any) => {
  const removePlace = useTripStore((s) => s.removePlace);
  return (
    <div className="bg-white rounded-xl shadow p-3 flex items-center gap-4">
      <img
        src={imageUrl || 'https://source.unsplash.com/400x300/?uttarakhand'}
        alt={title}
        className="w-24 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm flex items-center">
          <MapPin size={14} className="mr-1" /> {location}
        </p>
      </div>
      <button
        onClick={() => removePlace(id)}
        className="text-red-600 hover:text-red-800 p-1 rounded-full"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default TripCard;
