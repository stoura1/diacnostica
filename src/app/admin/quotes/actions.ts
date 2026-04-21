'use server'

import { quoteRequests } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function updateQuoteStatus(formData: FormData) {
  const id = formData.get('id') as string;
  const status = formData.get('status') as string;
  await quoteRequests.updateStatus(id, status);
  revalidatePath('/admin/quotes');
}

export async function deleteQuote(id: string) {
  await quoteRequests.delete(id);
  revalidatePath('/admin/quotes');
}
