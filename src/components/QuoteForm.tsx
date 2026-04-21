'use client';

import { useState } from 'react';
import { requestQuote } from '../app/actions';

export default function QuoteForm({ productId, productName }: { productId: string, productName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append('productId', productId);
      await requestQuote(formData);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Error submitting request');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: '20px', backgroundColor: 'var(--light-blue)', border: '1px solid var(--primary-blue)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--primary-blue)', marginBottom: '10px' }}>Request Sent Successfully!</h4>
        <p>Thank you. We have sent a confirmation email and will contact you shortly regarding the <strong>{productName}</strong>.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', backgroundColor: '#fff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
      <h3 style={{ marginBottom: '20px', color: 'var(--dark-blue)', borderBottom: '2px solid var(--light-blue)', paddingBottom: '10px' }}>
        Request a Quote
      </h3>
      {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Company / Full Name *</label>
          <input required type="text" name="customerName" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email Address *</label>
          <input required type="email" name="email" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone Number</label>
          <input type="tel" name="phone" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message / Additional Requirements</label>
          <textarea name="message" rows={4} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
        </div>
        <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: '10px' }}>
          {loading ? 'Sending...' : 'Send Request'}
        </button>
      </form>
    </div>
  );
}
