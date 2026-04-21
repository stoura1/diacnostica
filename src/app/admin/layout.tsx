import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 70px)' }}>
      {/* Admin Sidebar */}
      <aside style={{ width: '250px', backgroundColor: 'var(--dark-blue)', color: '#fff', padding: '20px', flexShrink: 0 }}>
        <h2 style={{ color: '#fff', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '10px' }}>
          Admin Panel
        </h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <li><Link href="/admin" style={{ color: '#ccc', fontWeight: 'bold' }}>Dashboard</Link></li>
          <li><Link href="/admin/quotes" style={{ color: '#ccc', fontWeight: 'bold' }}>Quote Requests</Link></li>
          <li><Link href="/admin/products" style={{ color: '#ccc', fontWeight: 'bold' }}>Products</Link></li>
          <li><Link href="/admin/categories" style={{ color: '#ccc', fontWeight: 'bold' }}>Categories</Link></li>
          <li><Link href="/admin/settings" style={{ color: '#ccc', fontWeight: 'bold' }}>Site Settings</Link></li>
        </ul>
      </aside>

      {/* Admin Content */}
      <main style={{ flex: 1, padding: '40px', backgroundColor: 'var(--background-gray)' }}>
        {children}
      </main>
    </div>
  );
}
