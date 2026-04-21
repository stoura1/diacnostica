import { quoteRequests } from '@/lib/db';
import AdminQuotesClient from './AdminQuotesClient';

export default async function AdminQuotes() {
  const quotes = await quoteRequests.findAll();
  return <AdminQuotesClient initialQuotes={quotes} />;
}
