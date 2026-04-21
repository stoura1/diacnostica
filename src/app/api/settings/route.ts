import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { settings } = await request.json() as { settings: Record<string, string> };

    for (const [key, value] of Object.entries(settings)) {
      await prisma.siteSetting.upsert({
        where: { key },
        update: { value },
        create: { key, value, type: 'string' },
      });
    }

    revalidatePath('/admin/settings');
    revalidatePath('/contact');
    revalidatePath('/about');
    revalidatePath('/');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Settings save error:', error);
    return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
  }
}
