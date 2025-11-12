export default function TripCard() {
  return (
    <div className="min-w-[300px] min-h-[200px] rounded-xl overflow-hidden relative">
      <img
        src="/trip.jpg"
        alt="Trip"
        className="w-full h-36 object-cover"
      />
      <div className="absolute inset-0 tracking-tight leading-5 text-zinc-700   flex flex-col justify-start h-full bg-[#4DFF76] items-start p-3">
        <p className="text-white font-semibold text-sm mt-20">Adventure Circuit</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eum!</p>
      </div>
    </div>
  );
}
