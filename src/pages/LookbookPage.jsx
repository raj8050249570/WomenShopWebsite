import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function LookbookPage() {
  const { navigateTo } = useShop();

  const editorialShots = [
    {
      title: 'Monochrome Stillness',
      season: 'Autumn / Winter Edition',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
      featuredSlug: 'linen-blend-blazer',
      description: 'Clean architectural tailoring meets effortless fluid draping in warm ivory and desert tones.'
    },
    {
      title: 'The Modern Evening',
      season: 'Resort Haute Collection',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
      featuredSlug: 'satin-slip-dress',
      description: 'Lustrous bias-cut silk that contours with liquid grace for high-society evenings.'
    },
    {
      title: 'Botanical Whimsy',
      season: 'Spring / Summer Bloom',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85',
      featuredSlug: 'floral-ruffle-dress',
      description: 'Cascading tiers and soft romantic florals crafted for sun-drenched European getaways.'
    },
    {
      title: 'Tailored Ease',
      season: 'Everyday Polished',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
      featuredSlug: 'wide-leg-trousers',
      description: 'High-waisted pleated palazzos that command poise without compromising comfort.'
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div className="section-header" style={{ marginBottom: '3.5rem' }}>
        <span className="section-label">EDITORIAL CAMPAIGN</span>
        <h1 className="section-title">THE LOOKBOOK</h1>
        <p className="section-subtitle">
          An exploration of form, natural drape, and timeless quiet luxury. Woven for the modern discerning woman.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {editorialShots.map((shot, idx) => (
          <div 
            key={idx}
            className="lookbook-row"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'center'
            }}
          >
            <div style={{ position: 'relative', borderRadius: 'var(--radius-sm)', overflow: 'hidden', boxShadow: 'var(--shadow-float)' }}>
              <img 
                src={shot.image} 
                alt={shot.title} 
                style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'cover', display: 'block' }} 
              />
            </div>

            <div>
              <span className="section-label">{shot.season}</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', margin: '0.5rem 0 1rem' }}>{shot.title}</h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.75rem', color: 'var(--color-text-secondary)' }}>
                {shot.description}
              </p>
              <button 
                className="btn-primary"
                onClick={() => navigateTo('product', shot.featuredSlug)}
              >
                <span>SHOP THIS LOOK</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
