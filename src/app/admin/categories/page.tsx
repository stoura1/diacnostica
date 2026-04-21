import { categories } from '@/lib/db';
import AdminCategoriesClient from './AdminCategoriesClient';

export default async function AdminCategoriesPage() {
  const allCategories = await categories.findAll();

  return <AdminCategoriesClient categories={allCategories} />;
}
