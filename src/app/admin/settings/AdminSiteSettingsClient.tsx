'use client';

import { useState } from 'react';

interface Setting {
  key: string;
  value: string;
  type: string;
}

interface AdminSiteSettingsClientProps {
  settings: Setting[];
}

const SECTIONS = [
  {
    title: '📞 Contact Us',
    icon: '📞',
    fields: [
      { key: 'contact_email', label: 'Email Address', type: 'string', placeholder: 'contact@diagnostica.com' },
      { key: 'contact_phone', label: 'Phone Number', type: 'string', placeholder: '+213 00 00 00 00' },
      { key: 'contact_address', label: 'Physical Address', type: 'string', placeholder: '123 Lab Street, Algiers' },
      { key: 'contact_hours', label: 'Working Hours', type: 'string', placeholder: 'Mon - Fri: 8:00 AM – 6:00 PM' },
    ],
  },
  {
    title: '🏢 About Us',
    icon: '🏢',
    fields: [
      { key: 'about_title', label: 'Page Title', type: 'string', placeholder: 'About Diagnostica' },
      { key: 'about_subtitle', label: 'Subtitle', type: 'string', placeholder: 'Your trusted partner...' },
      { key: 'about_content', label: 'Main Content', type: 'text', placeholder: 'Tell your company story...' },
      { key: 'about_mission', label: 'Our Mission', type: 'text', placeholder: 'Our mission is...' },
      { key: 'about_vision', label: 'Our Vision', type: 'text', placeholder: 'Our vision is...' },
    ],
  },
  {
    title: '📊 Company Stats',
    icon: '📊',
    fields: [
      { key: 'company_name', label: 'Company Name', type: 'string', placeholder: 'Diagnostica' },
      { key: 'company_founded', label: 'Founded Year', type: 'string', placeholder: '2010' },
      { key: 'company_clients', label: 'Satisfied Clients', type: 'string', placeholder: '500+' },
      { key: 'company_brands', label: 'Partner Brands', type: 'string', placeholder: '30+' },
    ],
  },
];

export default function AdminSiteSettingsClient({ settings }: AdminSiteSettingsClientProps) {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(settings.map(s => [s.key, s.value]))
  );
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings: values }),
      });
      if (!res.ok) throw new Error('Failed to save');
      setMessage({ type: 'success', text: '✅ All settings saved successfully!' });
    } catch {
      setMessage({ type: 'error', text: '❌ Failed to save settings. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px', flexWrap: 'wrap', gap: '16px' }}>
        <h1 style={{ color: 'var(--dark-blue)', fontSize: '2rem', margin: 0 }}>⚙️ Site Settings</h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn btn-primary"
          style={{ padding: '12px 32px', fontSize: '1rem', opacity: saving ? 0.7 : 1 }}
        >
          {saving ? '⏳ Saving...' : '💾 Save All Changes'}
        </button>
      </div>

      {message && (
        <div style={{
          padding: '14px 20px',
          borderRadius: 'var(--radius)',
          marginBottom: '24px',
          backgroundColor: message.type === 'success' ? '#dcfce7' : '#fee2e2',
          color: message.type === 'success' ? '#166534' : '#991b1b',
          fontWeight: 600,
          border: `1px solid ${message.type === 'success' ? '#bbf7d0' : '#fecaca'}`
        }}>
          {message.text}
        </div>
      )}

      {SECTIONS.map((section) => (
        <div key={section.title} style={{
          backgroundColor: '#fff',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '32px',
          border: '1px solid var(--border-color)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '20px 28px',
            backgroundColor: 'var(--background-gray)',
            borderBottom: '2px solid var(--border-color)'
          }}>
            <h2 style={{ margin: 0, color: 'var(--dark-blue)', fontSize: '1.2rem' }}>{section.title}</h2>
          </div>
          <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {section.fields.map((field) => (
              <div key={field.key}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#374151',
                  fontSize: '0.95rem'
                }}>
                  {field.label}
                  <span style={{ marginLeft: '8px', fontSize: '0.78rem', color: '#9CA3AF', fontWeight: 400 }}>
                    ({field.key})
                  </span>
                </label>
                {field.type === 'text' ? (
                  <textarea
                    rows={4}
                    value={values[field.key] || ''}
                    onChange={e => setValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius)',
                      fontSize: '0.95rem',
                      backgroundColor: '#fff',
                      resize: 'vertical',
                      lineHeight: 1.6
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    value={values[field.key] || ''}
                    onChange={e => setValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius)',
                      fontSize: '0.95rem',
                      backgroundColor: '#fff'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Save Button Bottom */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn btn-primary"
          style={{ padding: '14px 40px', fontSize: '1rem', opacity: saving ? 0.7 : 1 }}
        >
          {saving ? '⏳ Saving...' : '💾 Save All Changes'}
        </button>
      </div>
    </div>
  );
}
