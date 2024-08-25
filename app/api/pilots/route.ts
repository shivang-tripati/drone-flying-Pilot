import { NextResponse } from 'next/server';
import { pilotProfiles } from '@/utils/data';

export async function GET() {
  try {
    return NextResponse.json(pilotProfiles);
  } catch (error) {
    console.error('Error in /all-pilots:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
