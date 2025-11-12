'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Place {
  id: string;
  title: string;
  location: string;
  lat: number;
  lng: number;
  imageUrl?: string;
}

interface TripState {
  places: Place[];
  addPlace: (place: Place) => void;
  removePlace: (id: string) => void;
  clearTrip: () => void;
}

export const useTripStore = create(
  persist<TripState>(
    (set) => ({
      places: [],
      addPlace: (place) =>
        set((state) =>
          state.places.some((p) => p.id === place.id)
            ? state
            : { places: [...state.places, place] }
        ),
      removePlace: (id) =>
        set((state) => ({ places: state.places.filter((p) => p.id !== id) })),
      clearTrip: () => set({ places: [] }),
    }),
    { name: 'trip-storage' }
  )
);
