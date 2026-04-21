import Link from 'next/link';
import { siteSettings } from '@/lib/db';

export default async function Footer() {
  const dbSettings = await siteSettings.findAll();
  const settings = dbSettings.reduce((acc, curr) => ({ ...acc, [curr.key]: curr.value }), {} as Record<string, string>);
  
  const aboutText = settings.about_content || "Professional provider of medical and laboratory solutions. Committed to advancing healthcare through precision and technology.";
  const shortBio = aboutText.length > 160 ? aboutText.substring(0, 157) + "..." : aboutText;

  const address = settings.contact_address || "123 Lab Street, Algiers, Algeria";
  const phone = settings.contact_phone || "+213 00 00 00 00";
  const email = settings.contact_email || "contact@diagnostica.com";

  return (
    <footer style={{ backgroundColor: '#00264d', color: '#fff', padding: '80px 0', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px' }}>
          <div>
            <h3 style={{ color: '#fff', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 800 }}>DIAGNOSTICA</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.8 }}>
              {shortBio}
            </p>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '25px', fontSize: '1.1rem' }}>Sitemap</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Home</Link></li>
              <li><Link href="/catalog" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Products</Link></li>
              <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>About Us</Link></li>
              <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '25px', fontSize: '1.1rem' }}>Contact Us</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '10px' }}>
              📍 {address}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '10px' }}>
              📞 {phone}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              ✉️ {email}
            </p>
          </div>
        </div>
        <div style={{ 
          marginTop: '60px', 
          paddingTop: '30px', 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          textAlign: 'center',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '13px'
        }}>
          &copy; {new Date().getFullYear()} DIAGNOSTICA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
