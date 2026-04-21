import { categories, products } from '@/lib/db';
import AdminProductsClient from './AdminProductsClient';

export default async function AdminProducts() {
  const allProducts = await products.findAll();
  const allCategories = await categories.findAll();

  return <AdminProductsClient categories={allCategories} products={allProducts} />;
}
