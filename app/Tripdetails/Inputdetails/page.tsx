'use client';

// import { Link } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function TripDetailsPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    travelDays: '',
    destination: '',
    startDate: '',
    startDuration: 'morning',
    startLocation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    // Pass data to next page via query params
    const query = new URLSearchParams(formData as any).toString();
    router.push(`/trip/mood?${query}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100 p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Plan Your Trip</h1>

        <div className="space-y-4">
          <div>
            <label className="block font-medium">Travel Days</label>
            <input
              type="number"
              name="travelDays"
              value={formData.travelDays}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Number of days"
            />
          </div>

          <div>
            <label className="block font-medium">Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="City or region"
            />
          </div>

          <div>
            <label className="block font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Start Duration</label>
            <select
              name="startDuration"
              value={formData.startDuration}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="morning">Morning</option>
              <option value="midday">Midday</option>
              <option value="night">Night</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Start Location</label>
            <input
              type="text"
              name="startLocation"
              value={formData.startLocation}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="City or landmark"
            />
          </div>
        </div>
     <Link href='/Tripdetails/Inputmood'> 
        <button
          onClick={handleNext}
          className="mt-6 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          Next
        </button>
       </Link> 
      </div>
    </div>
  );
}
