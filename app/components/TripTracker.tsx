export default function TripTracker() {
  return (
    <div className="bg-emerald-100 text-black rounded-2xl p-6 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between mb-4">
          <h2 className="text-3xl tracking-tighter font-semibold">Trip tracker</h2>
          <button className="bg-gray-100 p-3 rounded-full text-gray-700">
            ↗
          </button>
        </div>
        <div className="flex justify-between text-md  mb-4">
          <span>Date: 21/11</span>
          <span>Time: 09:00 AM</span>
        </div>
        <div className="flex justify-center">
          <img
            src="https://cdn.dribbble.com/users/1126935/screenshots/17478489/media/feb4bca4b3a1be548246823ca5c7c7a1.gif"
            alt="Timer"
            className="rounded-xl w-48 h-48 object-cover"
          />
        </div>
      </div>
      <button className="bg-emerald-400 text-white mt-6 py-3 rounded-xl font-medium hover:opacity-90">
        Start now
      </button>
    </div>
  );
}
