import { siteSettings } from '@/lib/db';

function getSetting(settings: { key: string; value: string }[], key: string, fallback = '') {
  return settings.find(s => s.key === key)?.value || fallback;
}

export default async function AboutPage() {
  const settings = await siteSettings.findAll();


  const title = getSetting(settings, 'about_title', 'About Diagnostica');
  const subtitle = getSetting(settings, 'about_subtitle', 'Your trusted partner in medical laboratory excellence');
  const content = getSetting(settings, 'about_content');
  const mission = getSetting(settings, 'about_mission');
  const vision = getSetting(settings, 'about_vision');
  const founded = getSetting(settings, 'company_founded', '2010');
  const clients = getSetting(settings, 'company_clients', '500+');
  const brands = getSetting(settings, 'company_brands', '30+');

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="plexus-bg" style={{ padding: '90px 0', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>{title}</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto' }}>{subtitle}</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#fff', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', textAlign: 'center' }}>
            {[
              { label: 'Founded', value: founded, icon: '📅' },
              { label: 'Satisfied Clients', value: clients, icon: '🏥' },
              { label: 'Partner Brands', value: brands, icon: '🤝' },
            ].map((stat) => (
              <div key={stat.label} style={{
                padding: '40px 20px',
                borderRadius: 'var(--radius)',
                backgroundColor: 'var(--background-white)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: '8px' }}>{stat.value}</div>
                <div style={{ color: 'var(--text-gray)', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {content && (
            <div style={{
              backgroundColor: '#fff',
              padding: '50px',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '40px',
              borderLeft: '5px solid var(--primary-blue)'
            }}>
              <h2 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.6rem' }}>Who We Are</h2>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.9, fontSize: '1.05rem' }}>{content}</p>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {mission && (
              <div style={{
                backgroundColor: '#fff',
                padding: '35px',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🎯</div>
                <h3 style={{ color: 'var(--dark-blue)', marginBottom: '14px' }}>Our Mission</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.8 }}>{mission}</p>
              </div>
            )}
            {vision && (
              <div style={{
                backgroundColor: '#fff',
                padding: '35px',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🔭</div>
                <h3 style={{ color: 'var(--dark-blue)', marginBottom: '14px' }}>Our Vision</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.8 }}>{vision}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
