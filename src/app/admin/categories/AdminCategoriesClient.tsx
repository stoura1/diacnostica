'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
}

interface AdminCategoriesClientProps {
  categories: Category[];
}

export default function AdminCategoriesClient({ categories }: AdminCategoriesClientProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editImagePreview, setEditImagePreview] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [addImagePreview, setAddImagePreview] = useState<string | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);
  const editFormRef = useRef<HTMLFormElement>(null);

  const handleAddCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
    const imageInput = form.elements.namedItem('image') as HTMLInputElement;

    try {
      let imagePath = '';
      if (imageInput.files && imageInput.files.length > 0) {
        const uploadData = new FormData();
        uploadData.append('images', imageInput.files[0]);
        const res = await fetch('/api/upload', { method: 'POST', body: uploadData });
        if (!res.ok) throw new Error('Image upload failed');
        const result = await res.json();
        imagePath = result.paths?.[0] || '';
      }

      const saveRes = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, image: imagePath }),
      });
      if (!saveRes.ok) throw new Error('Failed to save category');

      setMessage({ type: 'success', text: `✅ Category "${name}" added successfully!` });
      formRef.current?.reset();
      setAddImagePreview(null);
      setTimeout(() => window.location.reload(), 1200);
    } catch (err) {
      setMessage({ type: 'error', text: `❌ Error: ${err instanceof Error ? err.message : 'Unknown error'}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingCategory) return;
    
    setIsSubmitting(true);
    setMessage(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
    const imageInput = form.elements.namedItem('image') as HTMLInputElement;

    try {
      let imagePath = editingCategory.image || '';
      
      // Only upload if a new file is selected
      if (imageInput.files && imageInput.files.length > 0) {
        const uploadData = new FormData();
        uploadData.append('images', imageInput.files[0]);
        const res = await fetch('/api/upload', { method: 'POST', body: uploadData });
        if (!res.ok) throw new Error('Image upload failed');
        const result = await res.json();
        imagePath = result.paths?.[0] || '';
      }

      const updateRes = await fetch(`/api/categories/${editingCategory.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, image: imagePath }),
      });
      
      if (!updateRes.ok) throw new Error('Failed to update category');

      setMessage({ type: 'success', text: `✅ Category "${name}" updated successfully!` });
      setEditingCategory(null);
      setEditImagePreview(null);
      setTimeout(() => window.location.reload(), 1200);
    } catch (err) {
      setMessage({ type: 'error', text: `❌ Error: ${err instanceof Error ? err.message : 'Unknown error'}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete category "${name}"? All products in this category will be affected.`)) return;
    try {
      await fetch(`/api/categories/${id}`, { method: 'DELETE' });
      setMessage({ type: 'success', text: `✅ Category "${name}" deleted.` });
      setTimeout(() => window.location.reload(), 1200);
    } catch {
      setMessage({ type: 'error', text: '❌ Failed to delete category.' });
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '30px', color: 'var(--dark-blue)', fontSize: '2rem' }}>
        🗂️ Categories Management
      </h1>

      {message && (
        <div style={{
          padding: '14px 20px',
          borderRadius: 'var(--radius)',
          marginBottom: '24px',
          backgroundColor: message.type === 'success' ? '#dcfce7' : '#fee2e2',
          color: message.type === 'success' ? '#166534' : '#991b1b',
          fontWeight: 600,
          border: `1px solid ${message.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {message.text}
        </div>
      )}

      {/* Add Category Form */}
      <div style={{
        backgroundColor: '#fff',
        padding: '35px',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-md)',
        marginBottom: '40px',
        border: '1px solid var(--border-color)'
      }}>
        <h3 style={{ marginBottom: '25px', color: 'var(--dark-blue)', fontSize: '1.3rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '12px' }}>
          ➕ Add New Category
        </h3>
        <form ref={formRef} onSubmit={handleAddCategory} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Category Name *</label>
            <input required name="name" type="text" placeholder="e.g. BIOCHIMIE"
              style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', fontSize: '0.95rem', backgroundColor: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Category Image</label>
            <input name="image" type="file" accept="image/*"
              onChange={e => {
                const f = e.target.files?.[0];
                if (f) setAddImagePreview(URL.createObjectURL(f));
                else setAddImagePreview(null);
              }}
              style={{ width: '100%', padding: '8px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', backgroundColor: '#fff' }} />
          </div>
          {addImagePreview && (
            <div style={{ gridColumn: '1 / -1' }}>
              <img src={addImagePreview} alt="Preview"
                style={{ width: '200px', height: '120px', objectFit: 'cover', borderRadius: '8px', border: '2px solid var(--border-color)' }} />
            </div>
          )}
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Description</label>
            <textarea name="description" rows={2} placeholder="Brief description of this category..."
              style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', fontSize: '0.95rem', backgroundColor: '#fff', resize: 'vertical' }} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem', opacity: isSubmitting ? 0.7 : 1 }}>
              {isSubmitting ? '⏳ Saving...' : '💾 Save Category'}
            </button>
          </div>
        </form>
      </div>

      {/* Categories Table */}
      <div style={{ backgroundColor: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
        <div style={{ padding: '20px 25px', borderBottom: '2px solid var(--border-color)', backgroundColor: 'var(--background-gray)' }}>
          <h3 style={{ color: 'var(--dark-blue)', margin: 0 }}>🏷️ All Categories ({categories.length})</h3>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)', backgroundColor: '#f9fafb' }}>
              <th style={{ padding: '15px 20px', color: '#374151', fontWeight: 700 }}>Image</th>
              <th style={{ padding: '15px 20px', color: '#374151', fontWeight: 700 }}>Name</th>
              <th style={{ padding: '15px 20px', color: '#374151', fontWeight: 700 }}>Description</th>
              <th style={{ padding: '15px 20px', color: '#374151', fontWeight: 700, width: '180px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => (
              <tr key={cat.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background-color 0.2s' }} className="table-row-hover">
                <td style={{ padding: '12px 20px' }}>
                  {cat.image ? (
                    <div style={{ position: 'relative', width: '80px', height: '50px', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="80px"
                        style={{ objectFit: 'cover' }}
                        unoptimized={cat.image.startsWith('/')}
                      />
                    </div>
                  ) : (
                    <div style={{ width: '80px', height: '50px', backgroundColor: 'var(--background-gray)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                      🖼️
                    </div>
                  )}
                </td>
                <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--dark-blue)' }}>
                  <span style={{ display: 'block' }}>{cat.name}</span>
                  <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 400 }}>/{cat.slug}</span>
                </td>
                <td style={{ padding: '12px 20px', color: '#6B7280', fontSize: '0.9rem', maxWidth: '300px' }}>
                  {cat.description || <span style={{ color: '#D1D5DB' }}>No description</span>}
                </td>
                <td style={{ padding: '12px 20px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      onClick={() => {
                        setEditingCategory(cat);
                        setEditImagePreview(cat.image);
                      }} 
                      className="btn btn-outline"
                      style={{ padding: '6px 12px', fontSize: '0.85rem' }}
                    >
                      ✏️ Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(cat.id, cat.name)}
                      style={{ padding: '6px 12px', fontSize: '0.85rem', backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #fecaca', borderRadius: 'var(--radius)', cursor: 'pointer' }}
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingCategory && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 55, 116, 0.4)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{
            backgroundColor: '#fff',
            width: '100%',
            maxWidth: '600px',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-color)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid var(--border-color)', paddingBottom: '15px' }}>
              <h2 style={{ color: 'var(--dark-blue)', margin: 0 }}>📝 Edit Category</h2>
              <button 
                onClick={() => { setEditingCategory(null); setEditImagePreview(null); }}
                style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#9CA3AF' }}
              >
                &times;
              </button>
            </div>

            <form ref={editFormRef} onSubmit={handleEditSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#374151' }}>Category Name</label>
                <input 
                  required 
                  name="name" 
                  type="text" 
                  defaultValue={editingCategory.name}
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', fontSize: '1rem' }} 
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#374151' }}>Image</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                  {editImagePreview ? (
                    <img src={editImagePreview} alt="Preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
                  ) : (
                    <div style={{ width: '100px', height: '60px', backgroundColor: 'var(--background-gray)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🖼️</div>
                  )}
                  <input 
                    name="image" 
                    type="file" 
                    accept="image/*"
                    onChange={e => {
                      const f = e.target.files?.[0];
                      if (f) setEditImagePreview(URL.createObjectURL(f));
                    }}
                    style={{ fontSize: '0.9rem' }} 
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#374151' }}>Description</label>
                <textarea 
                  name="description" 
                  rows={4} 
                  defaultValue={editingCategory.description || ''}
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', fontSize: '1rem', resize: 'vertical' }} 
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn btn-primary" 
                  style={{ flex: 1, padding: '14px', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? '⏳ Updating...' : '💾 Save Changes'}
                </button>
                <button 
                  type="button"
                  onClick={() => { setEditingCategory(null); setEditImagePreview(null); }}
                  className="btn btn-outline"
                  style={{ padding: '14px 24px' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        .table-row-hover:hover {
          background-color: #f0f9ff !important;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
