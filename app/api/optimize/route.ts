import { NextResponse } from 'next/server';

/**
 * POST /api/optimize/route
 *
 * Request Body Example:
 * {
 *   "places": [
 *     { "lat": 30.3165, "lng": 78.0322 },   // Dehradun
 *     { "lat": 29.3803, "lng": 79.4636 },   // Nainital
 *     { "lat": 30.7346, "lng": 79.0669 }    // Kedarnath
 *   ],
 *   "profile": "driving",
 *   "startIndex": 0
 * }
 */

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { places, profile = 'driving', startIndex = 0 } = body;

    if (!places || places.length < 2) {
      return NextResponse.json(
        { error: 'At least two coordinates required.' },
        { status: 400 }
      );
    }

    const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;
    if (!MAPBOX_TOKEN) {
      return NextResponse.json(
        { error: 'Missing Mapbox token in environment variables.' },
        { status: 500 }
      );
    }

    // Prepare coordinates string for API
    const coords = places.map((p: any) => `${p.lng},${p.lat}`).join(';');

    // Build Mapbox Optimization API URL
    const url = `https://api.mapbox.com/optimized-trips/v1/mapbox/${profile}/${coords}?geometries=geojson&source=first&destination=last&roundtrip=false&overview=full&access_token=${MAPBOX_TOKEN}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok || !data.trips || data.trips.length === 0) {
      console.error('Mapbox API error:', data);
      return NextResponse.json(
        { error: 'Optimization failed', details: data },
        { status: 500 }
      );
    }

    const trip = data.trips[0];
    const waypoints = data.waypoints;

    // Return structured data
    return NextResponse.json({
      success: true,
      optimizedOrder: waypoints.map((wp: any) => wp.waypoint_index),
      totalDurationMins: Math.round(trip.duration / 60),
      totalDistanceKm: (trip.distance / 1000).toFixed(1),
      geometry: trip.geometry,
    });
  } catch (err: any) {
    console.error('Error in /api/optimize/route:', err);
    return NextResponse.json(
      { error: 'Internal server error', message: err.message },
      { status: 500 }
    );
  }
}
