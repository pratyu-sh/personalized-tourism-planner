'use client';
import React from 'react';
import PlaceCard from './PlaceCard';
import { useTripStore } from '../trip/store';
import { placesData } from './data';

export default function PlacesPage() {
  const addPlace = useTripStore((state) => state.addPlace);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Explore Uttarakhand</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placesData.map((place) => (
          <PlaceCard key={place.id} {...place} onAdd={() => addPlace(place)} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a href="/trip" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          View Trip
        </a>
      </div>
    </div>
  );
}
