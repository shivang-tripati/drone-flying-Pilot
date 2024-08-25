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
        return distance <= range;
      })
      .sort((a, b) => {
        // Prioritize pilots based on experience if matchExperience is true
        if (matchExperience) {
          return b.workExperience - a.workExperience;
        }
        return 0; // Default sort or add other criteria if needed
      })
      .slice(0, 10); // Get top 10 pilots

    if (filteredPilots.length === 0) {
      return NextResponse.json({ message: 'No pilots found within the specified range' }, { status: 404 });
    }

    return NextResponse.json(filteredPilots);
  } catch (error) {
    console.error('Error in /match-pilots:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
