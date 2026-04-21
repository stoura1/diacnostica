import Link from 'next/link';
import { quoteRequests, products as productsDb } from '@/lib/db';

export default async function AdminDashboard() {
  const quoteCount = await quoteRequests.countPending();
  const allProducts = await productsDb.findAll();
  const productCount = allProducts.length;


  return (
    <div>
      <h1 style={{ marginBottom: '30px', color: 'var(--dark-blue)' }}>Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ color: 'var(--text-gray)' }}>Pending Quotes</h3>
          <p style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>{quoteCount}</p>
          <Link href="/admin/quotes" style={{ color: 'var(--accent-cyan)' }}>View All &rarr;</Link>
        </div>
        
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ color: 'var(--text-gray)' }}>Total Products</h3>
          <p style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>{productCount}</p>
          <Link href="/admin/products" style={{ color: 'var(--accent-cyan)' }}>Manage &rarr;</Link>
        </div>
      </div>
    </div>
  );
}
