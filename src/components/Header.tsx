import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { logout } from '@/app/actions';

export default async function Header() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let isAdmin = false;
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    isAdmin = profile?.role === 'admin';
  }

  return (
    <header style={{ 
      backgroundColor: 'rgba(0, 20, 50, 0.95)', 
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)', 
      padding: '20px 0', 
      position: 'sticky', 
      top: 0, 
      zIndex: 100, 
      boxShadow: '0 4px 30px rgba(0,0,0,0.1)' 
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ 
          fontSize: '22px', 
          fontWeight: 800, 
          color: '#ffffff', 
          letterSpacing: '1px',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            width: '24px', height: '24px', 
            background: 'linear-gradient(135deg, #0a84ff 0%, #00d4ff 100%)',
            borderRadius: '6px',
            boxShadow: '0 0 10px rgba(10, 132, 255, 0.5)'
          }}></div>
          DIAGNOSTICA
        </Link>
        <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <Link href="/" style={linkStyle} className="nav-link">Home</Link>
          <Link href="/catalog" style={linkStyle} className="nav-link">Catalog</Link>
          <Link href="/about" style={linkStyle} className="nav-link">About Us</Link>
          <Link href="/contact" style={linkStyle} className="nav-link">Contact</Link>
          
          <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 10px' }}></div>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {isAdmin && (
                <Link href="/admin" style={{ ...linkStyle, color: '#00d4ff' }} className="nav-link">Admin</Link>
              )}
              <span style={{ color: '#94a3b8', fontSize: '13px' }}>{user.email?.split('@')[0]}</span>
              <form action={logout}>
                <button type="submit" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '6px 15px',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}>
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <Link href="/login" style={{
              background: 'linear-gradient(135deg, #0a84ff 0%, #00d4ff 100%)',
              padding: '8px 20px',
              borderRadius: '10px',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 700,
              boxShadow: '0 4px 15px rgba(10, 132, 255, 0.3)',
              textDecoration: 'none'
            }}>
              Login
            </Link>
          )}
        </nav>
      </div>
      
      <style>{`
        .nav-link:hover {
          color: #0a84ff !important;
          text-shadow: 0 0 8px rgba(10, 132, 255, 0.3);
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  fontWeight: 600,
  color: '#f1f5f9',
  fontSize: '15px',
  transition: 'color 0.2s',
  letterSpacing: '0.3px',
  textDecoration: 'none'
}
