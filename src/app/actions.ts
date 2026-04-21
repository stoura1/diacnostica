'use server'

import { quoteRequests } from '@/lib/db';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}

export async function requestQuote(formData: FormData) {
  const customerName = formData.get('customerName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;
  const productId = formData.get('productId') as string;

  if (!customerName || !email) {
    throw new Error('Name and Email are required.');
  }

  // Generate a unique ID compatible with both SQLite and Supabase
  const id = `cuid_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

  // Write to BOTH local SQLite and Supabase cloud simultaneously
  await quoteRequests.create({ id, customerName, email, phone, message, productId });

  // Log email (Mocking the automated email behavior described in Phase 3)
  console.log(`\n============================`);
  console.log(`[EMAIL SEND MOCK] -> To: Admin`);
  console.log(`Subject: New quote request from ${customerName}`);
  console.log(`Body: Received a new quote for Product ID: ${productId}.\nMessage: ${message}`);
  
  console.log(`\n[EMAIL SEND MOCK] -> To: ${email}`);
  console.log(`Subject: Quote Request Confirmation`);
  console.log(`Body: Dear ${customerName},\nThank you for requesting a quote. We have received your request and will contact you shortly.\nBest regards,\nDiacnostica Team`);
  console.log(`============================\n`);

  return { success: true };
}
