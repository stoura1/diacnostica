'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageZoomProps {
  src: string;
  alt: string;
}

export default function ImageZoom({ src, alt }: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        style={{ 
          position: 'relative', 
          width: '100%', 
          height: '400px', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          cursor: 'zoom-in',
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0'
        }}
      >
        <Image 
          src={src} 
          alt={alt} 
          fill 
          style={{ objectFit: 'contain', padding: '20px' }} 
        />
        <div style={{
          position: 'absolute',
          bottom: '15px',
          right: '15px',
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          🔍
        </div>
      </div>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: '40px'
          }}
        >
          <div style={{ position: 'relative', width: '90vw', height: '90vh' }}>
            <Image 
              src={src} 
              alt={alt} 
              fill 
              style={{ objectFit: 'contain' }} 
            />
          </div>
          <button 
            style={{ 
              position: 'absolute', 
              top: '20px', 
              right: '25px', 
              background: 'none', 
              border: 'none', 
              color: '#fff', 
              fontSize: '30px', 
              cursor: 'pointer' 
            }}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
