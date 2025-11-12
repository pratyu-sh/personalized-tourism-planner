import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-8">
      <div className="container py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} DeepShiva — AI Tourism Planner
      </div>
    </footer>
  );
}
