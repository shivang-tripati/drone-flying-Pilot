import { NextRequest, NextResponse } from 'next/server';
import { pilotProfiles } from '@/utils/data';

const EARTH_RADIUS_KM = 6371;

function haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const lat1Rad = toRad(lat1);
  const lat2Rad = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_KM * c;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const latitude = parseFloat(searchParams.get('latitude') || '0');
    const longitude = parseFloat(searchParams.get('longitude') || '0');
    const range = parseFloat(searchParams.get('range') || '0');
    const matchExperience = searchParams.get('matchExperience') === 'true';

    console.log('Input Parameters:', { latitude, longitude, range, matchExperience });

    if (isNaN(latitude) || isNaN(longitude) || isNaN(range)) {
      return NextResponse.json({ error: 'Invalid input parameters' }, { status: 400 });
    }

    const filteredPilots = pilotProfiles
      .filter((pilot) => {
        const distance = haversine(
          latitude,
          longitude,
          pilot.geolocation.latitude,
          pilot.geolocation.longitude
        );
        console.log(`Pilot: ${pilot.name}, Distance: ${distance} km`);
        return distance <= range;
      });

    if (filteredPilots.length === 0) {
      console.log('No pilots found within the specified range');
      return NextResponse.json({ message: 'No pilots found within the specified range' }, { status: 404 });
    }

    if (matchExperience) {
      filteredPilots.sort((a, b) => b.workExperience - a.workExperience);
    }

    const result = matchExperience ? filteredPilots.slice(0, 10) : filteredPilots;

    console.log('Filtered Pilots:', result);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in /api/filter-pilots:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
