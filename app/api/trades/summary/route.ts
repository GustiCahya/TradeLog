import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getSummaryAnalytics } from '@/lib/services/trade.service';

export async function GET() {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const analytics = await getSummaryAnalytics(session.user.id);

    return NextResponse.json(analytics, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch summary analytics:', error);
    return NextResponse.json({ error: 'Failed to fetch summary analytics.' }, { status: 500 });
  }
}
