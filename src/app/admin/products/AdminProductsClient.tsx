'use client';

import { useState, useRef } from 'react';

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  brand: string | null;
  technicalDescription: string | null;
  categoryId: string;
  Category: { name: string } | null;
  images: string | null;
}

interface AdminProductsClientProps {
  categories: Category[];
  products: Product[];
}

export default function AdminProductsClient({ categories, products }: AdminProductsClientProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // Create Product States
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  // Edit Product States
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editImagesOrder, setEditImagesOrder] = useState<string[]>([]);
  const [editNewImageFiles, setEditNewImageFiles] = useState<File[]>([]);
  const [editPreviewImages, setEditPreviewImages] = useState<string[]>([]);

  // ---- Create Product Handlers ----
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const previews = files.map(f => URL.createObjectURL(f));
    setPreviewImages(previews);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const brand = (form.elements.namedItem('brand') as HTMLInputElement).value;
    const technicalDescription = (form.elements.namedItem('technicalDescription') as HTMLTextAreaElement).value;
    const categoryId = (form.elements.namedItem('categoryId') as HTMLSelectElement).value;
    const imageInput = form.elements.namedItem('images') as HTMLInputElement;

    try {
      let uploadedPaths: string[] = [];
      if (imageInput.files && imageInput.files.length > 0) {
        const uploadData = new FormData();
        for (const file of Array.from(imageInput.files)) {
          uploadData.append('images', file);
        }
        const uploadRes = await fetch('/api/upload', { method: 'POST', body: uploadData });
        if (!uploadRes.ok) throw new Error('Image upload failed');
        uploadedPaths = (await uploadRes.json()).paths || [];
      }

      const saveRes = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, brand, technicalDescription, categoryId, images: uploadedPaths }),
      });

      if (!saveRes.ok) throw new Error('Failed to save product');

      setMessage({ type: 'success', text: `✅ Product "${name}" saved successfully!` });
      formRef.current?.reset();
      setPreviewImages([]);
      setTimeout(() => window.location.reload(), 1500);
    } catch (err) {
      setMessage({ type: 'error', text: `❌ Error: ${err instanceof Error ? err.message : 'Unknown error'}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---- Edit Product Handlers ----
  const openEditModal = (p: Product) => {
    setEditingProduct(p);
    try {
      setEditImagesOrder(JSON.parse(p.images || '[]'));
    } catch {
      setEditImagesOrder([]);
    }
    setEditNewImageFiles([]);
    setEditPreviewImages([]);
    setMessage(null);
  };

  const handleEditNewImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setEditNewImageFiles(files);
    setEditPreviewImages(files.map(f => URL.createObjectURL(f)));
  };

  const moveImageLeft = (index: number) => {
    if (index === 0) return;
    const newOrder = [...editImagesOrder];
    [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    setEditImagesOrder(newOrder);
  };

  const moveImageRight = (index: number) => {
    if (index === editImagesOrder.length - 1) return;
    const newOrder = [...editImagesOrder];
    [newOrder[index + 1], newOrder[index]] = [newOrder[index], newOrder[index + 1]];
    setEditImagesOrder(newOrder);
  };

  const removeImage = (index: number) => {
    setEditImagesOrder(editImagesOrder.filter((_, i) => i !== index));
  };

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingProduct) return;
    setIsSubmitting(true);
    setMessage(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const brand = (form.elements.namedItem('brand') as HTMLInputElement).value;
    const technicalDescription = (form.elements.namedItem('technicalDescription') as HTMLTextAreaElement).value;
    const categoryId = (form.elements.namedItem('categoryId') as HTMLSelectElement).value;

    try {
      let appendedPaths: string[] = [];
      if (editNewImageFiles.length > 0) {
        const uploadData = new FormData();
        for (const file of editNewImageFiles) {
          uploadData.append('images', file);
        }
        const uploadRes = await fetch('/api/upload', { method: 'POST', body: uploadData });
        if (!uploadRes.ok) throw new Error('New images upload failed');
        appendedPaths = (await uploadRes.json()).paths || [];
      }

      const finalImages = [...editImagesOrder, ...appendedPaths];

      const patchRes = await fetch(`/api/products/${editingProduct.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, brand, technicalDescription, categoryId, images: finalImages }),
      });

      if (!patchRes.ok) throw new Error('Failed to update product details');
      
      setMessage({ type: 'success', text: `✅ Product "${name}" updated successfully!` });
      setTimeout(() => window.location.reload(), 1200);
      setEditingProduct(null);
    } catch (err: any) {
      setMessage({ type: 'error', text: `❌ ${err.message}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---- Delete Handler ----
  const handleDelete = async (id: string, name: string) => {
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete (product might be linked to existing quotes).');
      setMessage({ type: 'success', text: `✅ Product "${name}" deleted successfully.` });
      setTimeout(() => window.location.reload(), 1200);
    } catch (err: any) {
      setMessage({ type: 'error', text: `❌ ${err.message}` });
      alert(err.message);
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: '30px', color: 'var(--dark-blue)', fontSize: '2rem' }}>
        🗂️ Products Management
      </h1>

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

      {/* Add Product Form */}
      <div style={{ backgroundColor: '#fff', padding: '35px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', marginBottom: '40px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ marginBottom: '25px', color: 'var(--dark-blue)', fontSize: '1.3rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '12px' }}>
          ➕ Add New Product
        </h3>
        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Product Name *</label>
            <input required name="name" type="text" placeholder="e.g. AS-280 Auto Analyzer" style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', fontSize: '0.95rem', backgroundColor: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Brand</label>
            <input name="brand" type="text" placeholder="e.g. Diagnostica" style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', fontSize: '0.95rem', backgroundColor: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Category *</label>
            <select required name="categoryId" style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', fontSize: '0.95rem', backgroundColor: '#fff' }}>
              <option value="">Select Category</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Product Images</label>
            <input name="images" type="file" accept="image/*" multiple onChange={handleImageChange} style={{ width: '100%', padding: '8px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', backgroundColor: '#fff', fontSize: '0.9rem' }} />
          </div>
          {previewImages.length > 0 && (
            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {previewImages.map((src, i) => (
                <img key={i} src={src} alt={`Preview ${i + 1}`} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', border: '2px solid var(--border-color)' }} />
              ))}
            </div>
          )}
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#374151' }}>Technical Description (Use **text** for bold)</label>
            <textarea name="technicalDescription" rows={4} placeholder="Brief overview of product features... Use **Bold Text** for highlights." style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', fontSize: '0.95rem', backgroundColor: '#fff', resize: 'vertical' }} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem', opacity: isSubmitting ? 0.7 : 1 }}>
              {isSubmitting ? '⏳ Saving...' : '💾 Save Product & Images'}
            </button>
          </div>
        </form>
      </div>

      {/* Product Table */}
      <div style={{ backgroundColor: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
        <div style={{ padding: '20px 25px', borderBottom: '2px solid var(--border-color)', backgroundColor: 'var(--background-gray)' }}>
          <h3 style={{ color: 'var(--dark-blue)', margin: 0 }}>📦 All Products ({products.length})</h3>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
              <th style={{ padding: '15px 20px', color: '#374151' }}>Image</th>
              <th style={{ padding: '15px 20px', color: '#374151' }}>Name</th>
              <th style={{ padding: '15px 20px', color: '#374151' }}>Brand</th>
              <th style={{ padding: '15px 20px', color: '#374151' }}>Category</th>
              <th style={{ padding: '15px 20px', color: '#374151' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px 20px' }}>
                  <div style={{ display: 'flex', gap: '5px', maxWidth: '200px', overflowX: 'auto', paddingBottom: '5px' }}>
                    {(() => {
                      try {
                        const images = JSON.parse(p.images || '[]');
                        if (images.length === 0) return <div>🔬</div>;
                        return images.map((img: string, idx: number) => (
                          <img key={idx} src={img} alt={`${p.name} ${idx + 1}`} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border-color)', flexShrink: 0 }} />
                        ));
                      } catch {
                        return <div>🔬</div>;
                      }
                    })()}
                  </div>
                </td>
                <td style={{ padding: '12px 20px', fontWeight: 600 }}>{p.name}</td>
                <td style={{ padding: '12px 20px', color: '#6B7280' }}>{p.brand}</td>
                <td style={{ padding: '12px 20px' }}>
                  <span style={{ backgroundColor: 'var(--light-blue)', color: 'var(--primary-blue)', padding: '3px 10px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                    {p.Category?.name}
                  </span>
                </td>
                <td style={{ padding: '12px 20px', display: 'flex', gap: '8px' }}>
                  <button onClick={() => openEditModal(p)} style={{ padding: '6px 14px', fontSize: '0.85rem', backgroundColor: '#0ea5e9', color: '#fff', border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer' }}>Edit</button>
                  <DeleteButton product={p} onDelete={handleDelete} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 55, 116, 0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', zIndex: 1000, overflowY: 'auto', padding: '40px 20px' }}>
          <div style={{ backgroundColor: '#fff', width: '100%', maxWidth: '800px', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid var(--border-color)', paddingBottom: '15px' }}>
              <h2 style={{ color: 'var(--dark-blue)', margin: 0 }}>📝 Edit Product</h2>
              <button type="button" onClick={() => setEditingProduct(null)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#9CA3AF' }}>✖</button>
            </div>
            <form onSubmit={handleEditSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Product Name *</label>
                <input required name="name" defaultValue={editingProduct.name} type="text" style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Brand</label>
                <input name="brand" defaultValue={editingProduct.brand || ''} type="text" style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Category *</label>
                <select required name="categoryId" defaultValue={editingProduct.categoryId} style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)' }}>
                  {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>

              {/* Image Sorter */}
              <div style={{ gridColumn: '1 / -1', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                <h4 style={{ margin: '0 0 15px 0', color: '#334155' }}>Manage Existing Images (Drag or Reorder)</h4>
                {editImagesOrder.length === 0 ? <p style={{ color: '#94a3b8', margin: 0 }}>No images uploaded yet.</p> : (
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    {editImagesOrder.map((src, i) => (
                      <div key={i} style={{ position: 'relative', width: '120px', backgroundColor: '#fff', padding: '8px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                        <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', zIndex: 2 }}>{i + 1}</span>
                        <img src={src} key={`${src}-${i}`} alt={`img-${i}`} style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                          <button type="button" onClick={() => moveImageLeft(i)} disabled={i === 0} style={{ padding: '4px', fontSize: '12px', cursor: i === 0 ? 'not-allowed' : 'pointer', opacity: i === 0 ? 0.3 : 1 }}>◀</button>
                          <button type="button" onClick={() => removeImage(i)} style={{ padding: '4px', fontSize: '12px', color: 'red', cursor: 'pointer' }}>✖</button>
                          <button type="button" onClick={() => moveImageRight(i)} disabled={i === editImagesOrder.length - 1} style={{ padding: '4px', fontSize: '12px', cursor: i === editImagesOrder.length - 1 ? 'not-allowed' : 'pointer', opacity: i === editImagesOrder.length - 1 ? 0.3 : 1 }}>▶</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div style={{ marginTop: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Append New Images</label>
                  <input type="file" accept="image/*" multiple onChange={handleEditNewImagesChange} style={{ width: '100%', padding: '8px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '8px' }} />
                  {editPreviewImages.length > 0 && (
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                      {editPreviewImages.map((src, i) => (
                        <img key={i} src={src} alt="new" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px', opacity: 0.7 }} />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Technical Description (Use **text** for bold)</label>
                <textarea name="technicalDescription" defaultValue={editingProduct.technicalDescription || ''} rows={6} style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)', resize: 'vertical' }} />
              </div>
              <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '15px' }}>
                <button type="button" onClick={() => setEditingProduct(null)} style={{ padding: '12px 24px', backgroundColor: '#f1f5f9', color: '#475569', border: 'none', borderRadius: 'var(--radius)', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
                <button type="submit" disabled={isSubmitting} style={{ padding: '12px 24px', backgroundColor: 'var(--primary-blue)', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontWeight: 600, cursor: 'pointer', opacity: isSubmitting ? 0.7 : 1 }}>
                  {isSubmitting ? 'Saving changes...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function DeleteButton({ product, onDelete }: { product: {id: string, name: string}, onDelete: (id: string, name: string) => Promise<void> }) {
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
        await onDelete(product.id, product.name);
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
      }}>
      {isDeleting ? '⏳...' : confirming ? 'Sure?' : 'Delete'}
    </button>
  );
}
