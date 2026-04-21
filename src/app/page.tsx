import Link from 'next/link';
import Image from 'next/image';
import HeroTheme from '@/components/HeroTheme';
import { categories } from '@/lib/db';

export default async function Home() {
  const allCategories = await categories.findAll();


  return (
    <div className="animate-fade-in">
      {/* Hero Section - Theme Inspired */}
      <section className="plexus-bg" style={{ 
        position: 'relative',
        padding: '120px 0', 
        color: '#fff',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <HeroTheme />

        <div className="container" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '60px', alignItems: 'center' }}>
            <div style={{ pointerEvents: 'auto', maxWidth: '800px' }}>
              <h1 style={{ 
                fontSize: '4.5rem', 
                color: '#fff', 
                marginBottom: '24px',
                fontWeight: 800,
                lineHeight: 1.1,
                textShadow: '0 2px 20px rgba(0,0,0,0.5)'
              }}>
                Excellence in <br/> Diagnostic Solutions
              </h1>
              <p style={{ 
                fontSize: '1.4rem', 
                color: 'rgba(255,255,255,0.9)', 
                marginBottom: '40px', 
                maxWidth: '600px',
                lineHeight: 1.5,
                fontWeight: 400
              }}>
                Professional provider of leading medical and laboratory instruments. We simplify clinical diagnostics with cutting-edge technology.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/catalog" className="btn" style={{ 
                  backgroundColor: '#fff', 
                  color: 'var(--primary-blue)',
                  padding: '15px 40px',
                  borderRadius: '30px'
                }}>
                  View Products
                </Link>
                <Link href="/contact" className="btn btn-outline" style={{ 
                  borderColor: '#fff', 
                  color: '#fff',
                  borderWidth: '2px',
                  padding: '15px 40px',
                  borderRadius: '30px'
                }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Clean & Whitespaced */}
      <section style={{ padding: '120px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>Product Categories</h2>
            <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              Explore our comprehensive range of high-precision laboratory systems and reagents.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '40px' 
          }}>
            {allCategories.map(cat => (
              <Link 
                key={cat.id} 
                href={`/catalog?category=${cat.slug}`}
              >
                <div className="card-hover" style={{ 
                  backgroundColor: '#fff', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  border: '1px solid #f0f0f0',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}>
                  <div style={{ 
                    position: 'relative',
                    width: '100%', 
                    height: '240px', 
                    backgroundColor: 'var(--light-blue)', 
                  }}>
                    {cat.image ? (
                      <Image 
                        src={cat.image} 
                        alt={cat.name} 
                        fill 
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '40px' }}>
                        {getCategoryIcon(cat.slug)}
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '30px' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px', color: '#1a1a1a' }}>{cat.name}</h3>
                    <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>{cat.description}</p>
                    <span style={{ 
                      color: 'var(--primary-blue)', 
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Learn More &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ backgroundColor: 'var(--background-gray)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>🌐</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Global Network</h4>
              <p style={{ color: '#666' }}>Connected with top manufacturers worldwide to bring you the best technology.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>🛠️</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Technical Support</h4>
              <p style={{ color: '#666' }}>Expert maintenance and installation services for all equipment.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>🧪</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Full Solutions</h4>
              <p style={{ color: '#666' }}>We provide not only equipment but complete laboratory workflows.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function getCategoryIcon(slug: string) {
  switch (slug) {
    case 'biochimie': return '🧪';
    case 'immunochimie': return '🧬';
    case 'hematologie': return '🩸';
    case 'hemostase': return '🩹';
    case 'hplc-hba1c': return '📊';
    case 'ionogramme': return '⚡';
    case 'centrifugeuses': return '🌀';
    case 'accessoires-mixers': return '🥄';
    case 'reactifs': return '⚗️';
    default: return '📦';
  }
}
