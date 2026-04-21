import Link from 'next/link';
import Image from 'next/image';
import { categories as categoriesDb, products as productsDb } from '@/lib/db';

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const { category, search } = await searchParams;

  const allCategories = await categoriesDb.findAll();

  let categoryId: string | undefined;
  if (category) {
    const cat = await categoriesDb.findBySlug(category);
    if (cat) categoryId = cat.id;
  }

  const allProducts = await productsDb.findAll({ categoryId, search });

  return (
    <div className="container" style={{ padding: '40px 20px', display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
      {/* Sidebar Filters */}
      <aside style={{ width: '250px', flexShrink: 0, padding: '20px', backgroundColor: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
        <h3 style={{ marginBottom: '15px', color: 'var(--dark-blue)', borderBottom: '2px solid var(--light-blue)', paddingBottom: '10px' }}>Categories</h3>
        <ul style={{ listStyle: 'none' }}>
          <li style={{ marginBottom: '10px' }}>
            <Link href="/catalog" style={{ fontWeight: !category ? 'bold' : 'normal', color: !category ? 'var(--primary-blue)' : 'var(--text-gray)' }}>
              All Products
            </Link>
          </li>
          {allCategories.map(c => (
            <li key={c.id} style={{ marginBottom: '10px' }}>
              <Link href={`/catalog?category=${c.slug}`} style={{ fontWeight: category === c.slug ? 'bold' : 'normal', color: category === c.slug ? 'var(--primary-blue)' : 'var(--text-gray)' }}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search */}
        <h3 style={{ marginTop: '30px', marginBottom: '15px', color: 'var(--dark-blue)', borderBottom: '2px solid var(--light-blue)', paddingBottom: '10px' }}>Search</h3>
        <form action="/catalog" method="GET">
          {category && <input type="hidden" name="category" value={category} />}
          <input 
            type="text" 
            name="search" 
            defaultValue={search || ''} 
            placeholder="Search by name or brand..." 
            style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}
          />
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Search</button>
        </form>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ marginBottom: '20px' }}>Product Catalog {category ? `- ${allCategories.find(c => c.slug === category)?.name || category}` : ''}</h1>
        {allProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {allProducts.map(p => {
              let imageUrl = '';
              try {
                const images = JSON.parse(p.images || '[]');
                if (images.length > 0) imageUrl = images[0];
              } catch (e) {}

              return (
                <div key={p.id} style={{ 
                  backgroundColor: '#fff', 
                  borderRadius: '12px', 
                  boxShadow: 'var(--shadow-sm)', 
                  display: 'flex', 
                  flexDirection: 'column',
                  overflow: 'hidden',
                  border: '1px solid #f0f0f0',
                  transition: 'all 0.3s ease'
                }} className="card-hover">
                  <div style={{ position: 'relative', width: '100%', height: '220px', backgroundColor: '#f8fafc' }}>
                    {imageUrl ? (
                      <Image src={imageUrl} alt={p.name} fill style={{ objectFit: 'contain', padding: '15px' }} />
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#cbd5e1', fontSize: '3rem' }}>🔬</div>
                    )}
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'block' }}>
                      {p.brand}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#1a1a1a', lineHeight: 1.3 }}>{p.name}</h3>
                    <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '24px', flex: 1, lineHeight: 1.5 }}>
                      {p.technicalDescription?.substring(0, 100)}...
                    </p>
                    <Link href={`/catalog/${p.slug}`} className="btn btn-primary" style={{ width: '100%', borderRadius: '30px' }}>
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
