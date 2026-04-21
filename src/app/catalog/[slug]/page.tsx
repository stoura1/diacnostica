import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import ProductGallery from '@/components/ProductGallery';
import { products } from '@/lib/db';

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const product = await products.findBySlug(slug);

  if (!product) {
    return (
      <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link href="/catalog" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Catalog</Link>
      </div>
    );
  }

  let specifications = [];
  try {
    if (product.specifications) {
      specifications = JSON.parse(product.specifications);
    }
  } catch(e) {}

  let images: string[] = [];
  try {
    images = JSON.parse(product.images || '[]');
  } catch(e) {}

  const mainImage = images[0] || '';

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 20px' }}>
      
      <Link href="/catalog" style={{ display: 'inline-block', marginBottom: '30px', fontWeight: 'bold' }}>
        &larr; Back to Catalog
      </Link>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '60px', alignItems: 'flex-start' }}>
        
        {/* Left Column: Image and Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <ProductGallery images={images} productName={product.name} />

          <span style={{ color: 'var(--text-gray)', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
            {product.Category?.name} {product.brand ? `• ${product.brand}` : ''}
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{product.name}</h1>
          
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', marginBottom: '30px' }}>
            <h3 style={{ borderBottom: '2px solid var(--light-blue)', paddingBottom: '10px', marginBottom: '15px' }}>Technical Description</h3>
            <div 
              style={{ color: 'var(--text-dark)', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}
              dangerouslySetInnerHTML={{ 
                __html: (product.technicalDescription || '')
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/<b>(.*?)<\/b>/g, '<strong>$1</strong>')
              }}
            />
          </div>

          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', marginBottom: '30px' }}>
            <h3 style={{ borderBottom: '2px solid var(--light-blue)', paddingBottom: '10px', marginBottom: '15px' }}>Specifications</h3>
            {specifications.length > 0 ? (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {specifications.map((spec: any, idx: number) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: idx % 2 === 0 ? 'var(--background-white)' : 'var(--background-gray)' }}>
                      <td style={{ padding: '12px 15px', fontWeight: '600', width: '40%' }}>{spec.key}</td>
                      <td style={{ padding: '12px 15px', color: 'var(--text-gray)' }}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No specifications available.</p>
            )}
          </div>

          {product.pdfFile && (
            <a href={product.pdfFile} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-block', marginBottom: '20px' }}>
              📄 Download PDF Specifications
            </a>
          )}
        </div>

        {/* Quote Request Sidebar */}
        <aside style={{ flex: '1', minWidth: '300px' }}>
          <QuoteForm productId={product.id} productName={product.name} />
        </aside>

      </div>
    </div>
  );
}
