import React from 'react';
import { X, Ruler } from 'lucide-react';

export default function SizeGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '640px', padding: '2.5rem' }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close size guide">
          <X size={22} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
          <Ruler size={22} color="var(--color-olive-dark)" />
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem' }}>WOMEN'S SIZE GUIDE</h3>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
          All measurements are in inches. For an oversized fit as styled on our models, we recommend taking your standard size.
        </p>

        <div style={{ width: '100%', overflowX: 'auto', marginBottom: '1.5rem' }} className="no-scrollbar">
          <table style={{ width: '100%', minWidth: '400px', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-bg-subtle)', borderBottom: '1.5px solid var(--color-border-medium)' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Size</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>US / UK</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Bust (in)</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Waist (in)</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Hips (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                <td style={{ padding: '0.75rem', fontWeight: 600 }}>XS</td>
                <td style={{ padding: '0.75rem' }}>0 - 2 (UK 4-6)</td>
                <td style={{ padding: '0.75rem' }}>32" - 33"</td>
                <td style={{ padding: '0.75rem' }}>24" - 25"</td>
                <td style={{ padding: '0.75rem' }}>34" - 35"</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                <td style={{ padding: '0.75rem', fontWeight: 600 }}>S</td>
                <td style={{ padding: '0.75rem' }}>4 - 6 (UK 8-10)</td>
                <td style={{ padding: '0.75rem' }}>34" - 35"</td>
                <td style={{ padding: '0.75rem' }}>26" - 27"</td>
                <td style={{ padding: '0.75rem' }}>36" - 37"</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                <td style={{ padding: '0.75rem', fontWeight: 600 }}>M</td>
                <td style={{ padding: '0.75rem' }}>8 - 10 (UK 12-14)</td>
                <td style={{ padding: '0.75rem' }}>36" - 37"</td>
                <td style={{ padding: '0.75rem' }}>28" - 29"</td>
                <td style={{ padding: '0.75rem' }}>38" - 39"</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                <td style={{ padding: '0.75rem', fontWeight: 600 }}>L</td>
                <td style={{ padding: '0.75rem' }}>12 - 14 (UK 16)</td>
                <td style={{ padding: '0.75rem' }}>38" - 40"</td>
                <td style={{ padding: '0.75rem' }}>30" - 32"</td>
                <td style={{ padding: '0.75rem' }}>40" - 42"</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', fontWeight: 600 }}>XL</td>
                <td style={{ padding: '0.75rem' }}>16 (UK 18)</td>
                <td style={{ padding: '0.75rem' }}>41" - 43"</td>
                <td style={{ padding: '0.75rem' }}>33" - 35"</td>
                <td style={{ padding: '0.75rem' }}>43" - 45"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button 
          className="btn-primary" 
          style={{ width: '100%' }}
          onClick={onClose}
        >
          GOT IT
        </button>
      </div>
    </div>
  );
}
