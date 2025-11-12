export async function optimizeRoute(places: { lat: number; lng: number }[]) {
  if (places.length < 2) return { order: [0], totalDuration: 0 };

  const coords = places.map((p) => `${p.lng},${p.lat}`).join(';');
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const url = `https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coords}?geometries=geojson&roundtrip=false&source=first&access_token=${token}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.trips && data.trips.length > 0) {
    return {
      order: data.waypoints.map((w: any) => w.waypoint_index),
      totalDuration: Math.round(data.trips[0].duration / 60),
    };
  }

  return { order: [], totalDuration: 0 };
}
