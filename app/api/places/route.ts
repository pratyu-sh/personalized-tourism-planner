import { NextResponse } from 'next/server';

export async function GET() {
  const adventurePlaces = [
    {
      id: '1',
      name: 'Mussoorie',
      location: 'Dehradun District',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Mussoorie_Hill_Station.jpg',
      category: 'adventure',
    },
    {
      id: '2',
      name: 'Auli',
      location: 'Chamoli District',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Auli_ski_resort.jpg',
      category: 'adventure',
    },
    {
      id: '3',
      name: 'Rishikesh',
      location: 'Tehri Garhwal District',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Rishikesh_Laxman_Jhula.jpg',
      category: 'adventure',
    },
  ];
  return NextResponse.json(adventurePlaces);
}
