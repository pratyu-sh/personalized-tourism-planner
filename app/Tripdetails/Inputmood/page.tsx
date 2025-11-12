'use client';

// import { Link } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
const moods = [
  { id: 'devotional', title: 'Pilgrimage / Devotional', color: 'bg-yellow-400' },
  { id: 'family', title: 'Family Friendly', color: 'bg-green-400' },
  { id: 'eco', title: 'Eco Parks & Environment', color: 'bg-blue-400' },
  { id: 'adventure', title: 'Adventure Sports', color: 'bg-red-400' },
];

export default function MoodSelectionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedMood, setSelectedMood] = useState('');

  const handleNext = () => {
    const tripData: any = {};
    searchParams.forEach((value, key) => (tripData[key] = value));
    tripData.mood = selectedMood;

    const query = new URLSearchParams(tripData).toString();
    router.push(`/trip/explore?${query}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-6">Select Your Trip Mood</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {moods.map((mood) => (
          <div
            key={mood.id}
            onClick={() => setSelectedMood(mood.id)}
            className={`cursor-pointer p-6 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-lg transition-transform ${
              selectedMood === mood.id ? 'scale-105 ring-4 ring-orange-500' : ''
            } ${mood.color}`}
          >
            {mood.title}
          </div>
        ))}
      </div>
      <Link href='/explore'>
      <button
        onClick={handleNext}
        disabled={!selectedMood}
        className="mt-8 bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 disabled:opacity-50 transition"
      >
        Next
      </button>

      </Link>
    </div>
  );
}
