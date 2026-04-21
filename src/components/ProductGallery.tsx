'use client';

import { useState } from 'react';
import ImageZoom from './ImageZoom';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div style={{ width: '100%', height: '400px', backgroundColor: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', fontSize: '4rem' }}>🔬</div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {/* Main Image */}
      <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
        <ImageZoom src={images[selectedIndex]} alt={`${productName} view ${selectedIndex + 1}`} />
      </div>

      {/* Thumbnails row */}
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }} className="custom-scrollbar">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedIndex(idx)}
              style={{ 
                width: '80px', 
                height: '80px', 
                flexShrink: 0,
                borderRadius: '8px', 
                overflow: 'hidden', 
                border: selectedIndex === idx ? '2px solid var(--primary-blue)' : '1px solid #e2e8f0',
                cursor: 'pointer',
                position: 'relative',
                opacity: selectedIndex === idx ? 1 : 0.6,
                transition: 'all 0.2s',
                backgroundColor: '#fff'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = selectedIndex === idx ? '1' : '0.6'}
            >
              <Image 
                src={src} 
                alt={`${productName} thumbnail ${idx + 1}`} 
                fill 
                sizes="80px"
                style={{ objectFit: 'contain', padding: '5px' }} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
