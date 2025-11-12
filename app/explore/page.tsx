'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, MapPin } from 'lucide-react';

interface Place {
  id: string;
  name: string;
  location: string;
  image: string;
  category: string;
  description?: string;
}

export default function ExplorePage() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 🔍 Fetch data dynamically (mock or from your own API)
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        // In real use: Replace this with an API call like `/api/places?category=adventure`
        const res = await fetch('/api/places?category=adventure');
        const data = await res.json();
        setPlaces(data);
      } catch (err) {
        // fallback mock data if fetch fails
        setPlaces([
          {
            id: '1',
            name: 'Mussoorie',
            location: 'Dehradun District',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/3/33/Mussoorie_Hill_Station.jpg',
            category: 'adventure',
          },
          {
            id: '2',
            name: 'Auli',
            location: 'Chamoli District',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/b/b2/Auli_ski_resort.jpg',
            category: 'adventure',
          },
          {
            id: '3',
            name: 'Rishikesh',
            location: 'Tehri Garhwal District',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/6/6b/Rishikesh_Laxman_Jhula.jpg',
            category: 'adventure',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  const handleAddPlace = (place: Place) => {
    if (!selectedPlaces.find((p) => p.id === place.id)) {
      setSelectedPlaces([...selectedPlaces, place]);
    }
  };

  const handleGoToTrip = () => {
    localStorage.setItem('tripList', JSON.stringify(selectedPlaces));
    router.push('/trip');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 mt-5">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 ">Adventure Destinations</h1>

      {loading ? (
        <p className="text-center text-gray-500 mt-10">Loading places...</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
          {places.map((place) => (
            <div
              key={place.id}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />

              <div className="absolute top-3 right-3">
                <button
                  onClick={() => handleAddPlace(place)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold">{place.name}</h2>
                <div className="flex items-center text-gray-500 mt-1">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">{place.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🟢 Floating "Go to Trip" button */}
      {selectedPlaces.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
          <button
            onClick={handleGoToTrip}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
          >
            Go to Trip ({selectedPlaces.length})
          </button>
        </div>
      )}
    </div>
  );
}
