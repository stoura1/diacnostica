import { siteSettings } from '@/lib/db';

function getSetting(settings: { key: string; value: string }[], key: string, fallback = '') {
  return settings.find(s => s.key === key)?.value || fallback;
}

export default async function ContactPage() {
  const settings = await siteSettings.findAll();


  const email = getSetting(settings, 'contact_email', 'contact@diagnostica.com');
  const phone = getSetting(settings, 'contact_phone', '+213 00 00 00 00');
  const address = getSetting(settings, 'contact_address', 'Algeria');
  const hours = getSetting(settings, 'contact_hours', 'Mon - Fri: 8:00 AM – 6:00 PM');

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="plexus-bg" style={{ padding: '90px 0', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', maxWidth: '500px', margin: '0 auto' }}>
            We&apos;re here to help. Reach out to our team for quotes, support, or any questions.
          </p>
        </div>
      </section>

      {/* Contact Cards + Form */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', alignItems: 'flex-start' }}>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: '📧', label: 'Email', value: email, href: `mailto:${email}` },
                { icon: '📞', label: 'Phone', value: phone, href: `tel:${phone.replace(/\s/g, '')}` },
                { icon: '📍', label: 'Address', value: address, href: null },
                { icon: '🕗', label: 'Working Hours', value: hours, href: null },
              ].map((item) => (
                <div key={item.label} style={{
                  backgroundColor: '#fff',
                  padding: '28px',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}>
                  <div style={{
                    width: '52px', height: '52px', flexShrink: 0,
                    backgroundColor: 'var(--background-gray)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem'
                  }}>{item.icon}</div>
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--dark-blue)', marginBottom: '4px' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ color: 'var(--primary-blue)', fontWeight: 500 }}>{item.value}</a>
                    ) : (
                      <p style={{ color: 'var(--text-gray)' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div style={{
              backgroundColor: '#fff',
              padding: '45px',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-color)'
            }}>
              <h2 style={{ color: 'var(--dark-blue)', marginBottom: '8px', fontSize: '1.6rem' }}>Send a Message</h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>Fill in the form and we&apos;ll respond within 24 hours.</p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Full Name</label>
                    <input type="text" placeholder="Your name" style={{
                      width: '100%', padding: '12px 14px', border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius)', fontSize: '0.95rem', backgroundColor: '#fff'
                    }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Email</label>
                    <input type="email" placeholder="your@email.com" style={{
                      width: '100%', padding: '12px 14px', border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius)', fontSize: '0.95rem', backgroundColor: '#fff'
                    }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Subject</label>
                  <input type="text" placeholder="How can we help?" style={{
                    width: '100%', padding: '12px 14px', border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius)', fontSize: '0.95rem', backgroundColor: '#fff'
                  }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Message</label>
                  <textarea rows={5} placeholder="Tell us about your needs..." style={{
                    width: '100%', padding: '12px 14px', border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius)', fontSize: '0.95rem', backgroundColor: '#fff', resize: 'vertical'
                  }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1rem' }}>
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
