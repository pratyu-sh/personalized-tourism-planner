"use client";

import { Menu } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex  items-center justify-between p-4 mb-10">
      <div className="flex  items-center gap-17">
       <div className="flex justify-center items-center gap-2">
         <button className="p-2 bg-gray-100 rounded-lg shadow-sm">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
         <h4>Personalize Tourism</h4>
       </div>
        <div className="flex items-center gap-2  px-4 py-2 rounded-full shadow-sm">
          <span className="text-2xl font-semibold">19</span>
          <div className="flex flex-col text-xs">
            <span>Tue,</span>
            <span>December</span>
          </div>
        </div>
        <button className="border rounded-full px-4 py-2 gap-2   bg-emerald-400 text-sm font-medium flex justify-between  items-center">
          Show my trips 
          <div>
              <ArrowRight />
          </div>

        </button>
      </div>
     
    </nav>
  );
}
