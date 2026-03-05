import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { createTrade } from '@/lib/services/trade.service';

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const trade = await createTrade(session.user.id, data);

    return NextResponse.json({ success: true, trade }, { status: 201 });
  } catch (error) {
    console.error('Failed to create trade:', error);
    return NextResponse.json({ error: 'Failed to create trade.' }, { status: 500 });
  }
}
