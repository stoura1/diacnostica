import { NextRequest, NextResponse } from 'next/server';
import { quoteRequests } from '@/lib/db';
import { revalidatePath } from 'next/cache';

// DELETE /api/quotes/[id] - Delete a quote request
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await quoteRequests.delete(id);
    revalidatePath('/admin/quotes');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete quote error:', error);
    return NextResponse.json({ error: 'Failed to delete quote' }, { status: 500 });
  }
}

// PATCH /api/quotes/[id] - Update quote status
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status } = await request.json();
    await quoteRequests.updateStatus(id, status);
    revalidatePath('/admin/quotes');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update quote error:', error);
    return NextResponse.json({ error: 'Failed to update quote' }, { status: 500 });
  }
}
