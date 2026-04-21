'use client';

import { useState } from 'react';

interface Quote {
  id: string;
  customerName: string;
  email: string;
  phone: string | null;
  status: string;
  createdAt: string;
  Product: { name: string } | null;
}

export default function AdminQuotesClient({ initialQuotes }: { initialQuotes: Quote[] }) {
  const [quotes, setQuotes] = useState<Quote[]>(initialQuotes);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/quotes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Failed to update status');
      setQuotes(prev => prev.map(q => q.id === id ? { ...q, status } : q));
      setMessage({ type: 'success', text: '✅ Status updated successfully.' });
      setTimeout(() => setMessage(null), 3000);
    } catch (err: any) {
      setMessage({ type: 'error', text: `❌ ${err.message}` });
    }
  };

  const handleDelete = async (id: string, customerName: string) => {
    try {
      const res = await fetch(`/api/quotes/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete quote request.');
      setQuotes(prev => prev.filter(q => q.id !== id));
      setMessage({ type: 'success', text: `✅ Request from "${customerName}" deleted successfully.` });
      setTimeout(() => setMessage(null), 3000);
    } catch (err: any) {
      setMessage({ type: 'error', text: `❌ ${err.message}` });
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: '30px', color: 'var(--dark-blue)' }}>Quote Requests</h1>

      {message && (
        <div style={{
          padding: '14px 20px',
          borderRadius: 'var(--radius)',
          marginBottom: '20px',
          backgroundColor: message.type === 'success' ? '#dcfce7' : '#fee2e2',
          color: message.type === 'success' ? '#166534' : '#991b1b',
          fontWeight: 600,
          border: `1px solid ${message.type === 'success' ? '#bbf7d0' : '#fecaca'}`
        }}>
          {message.text}
        </div>
      )}

      <div style={{ overflowX: 'auto', backgroundColor: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)', backgroundColor: 'var(--background-gray)' }}>
              <th style={{ padding: '15px' }}>Date</th>
              <th style={{ padding: '15px' }}>Customer</th>
              <th style={{ padding: '15px' }}>Product</th>
              <th style={{ padding: '15px' }}>Status</th>
              <th style={{ padding: '15px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map(q => (
              <tr key={q.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '15px' }}>{new Date(q.createdAt).toLocaleDateString()}</td>
                <td style={{ padding: '15px' }}>
                  <strong>{q.customerName}</strong><br />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>{q.email}</span><br />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>{q.phone}</span>
                </td>
                <td style={{ padding: '15px' }}>{q.Product?.name || 'N/A'}</td>
                <td style={{ padding: '15px' }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    backgroundColor: q.status === 'pending' ? '#FFF3CD' : '#D4EDDA',
                    color: q.status === 'pending' ? '#856404' : '#155724'
                  }}>
                    {q.status}
                  </span>
                </td>
                <td style={{ padding: '15px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <select
                      defaultValue={q.status}
                      onChange={e => handleUpdateStatus(q.id, e.target.value)}
                      style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer' }}
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="contacted">Contacted</option>
                    </select>

                    <DeleteButton quote={q} onDelete={handleDelete} />
                  </div>
                </td>
              </tr>
            ))}
            {quotes.length === 0 && (
              <tr>
                <td colSpan={5} style={{ padding: '30px', textAlign: 'center' }}>No quote requests found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ---- Delete Button with double-click confirmation (same as Products) ----
function DeleteButton({ quote, onDelete }: { quote: { id: string; customerName: string }, onDelete: (id: string, name: string) => Promise<void> }) {
  const [confirming, setConfirming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <button
      type="button"
      disabled={isDeleting}
      onClick={async () => {
        if (!confirming) {
          setConfirming(true);
          setTimeout(() => setConfirming(false), 3000);
          return;
        }
        setIsDeleting(true);
        await onDelete(quote.id, quote.customerName);
        setIsDeleting(false);
        setConfirming(false);
      }}
      style={{
        padding: '6px 14px',
        fontSize: '0.85rem',
        backgroundColor: confirming ? '#ffc107' : '#dc3545',
        color: confirming ? '#000' : '#fff',
        border: 'none',
        borderRadius: 'var(--radius)',
        cursor: isDeleting ? 'wait' : 'pointer',
        fontWeight: confirming ? 'bold' : 'normal',
        transition: 'all 0.2s',
        minWidth: '70px'
      }}
    >
      {isDeleting ? '⏳...' : confirming ? 'Sure?' : 'Delete'}
    </button>
  );
}
