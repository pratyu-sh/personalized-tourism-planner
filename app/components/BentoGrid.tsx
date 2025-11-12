// import { Link } from "lucide-react";
import TripCard from "./TripCard";
import TripTracker from "./TripTracker";

import Link from "next/link";

export default function BentoGrid() {
  return (
    <section className="grid bg-[#ffe6c8]  text-black grid-cols-1 lg:grid-cols-3 gap-4  p-4">
      {/* Left Section */}
      <div className="lg:col-span-2  h-full  flex flex-col gap-4">
        <div className="bg-[#F6FFF6] flex flex-col justify-between  border border-gray-200 rounded-[24px] p-5  shadow-sm">
          <h1 className="text-[56px] tracking-tighter font-bold mb-2 leading-16">Lets plan your trip <br /> with AI</h1>
          
           <Link href="/Tripdetails/Inputdetails">
          <button className="bg-[#4DFF76] w-[450px]   mt-4 text-black px-6 py-3 rounded-2xl font-medium hover:opacity-90">
            Start now
          </button>
         
            
          </Link>

        </div>

        <div className="bg-[#F6FFF6] rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between mb-4">
            <h2 className="text-3xl font-semibold tracking-tight">Trending AI Trips</h2>
            <button className="bg-gray-100 p-2 rounded-full text-gray-700">
              ↗
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            <TripCard />
            <TripCard />
            <TripCard />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <TripTracker />
    </section>
  );
}
