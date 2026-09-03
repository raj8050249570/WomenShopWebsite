import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
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
    <div className="container" style={{ padding: '3rem 0 6rem' }}>
      <div className="section-header" style={{ marginBottom: '4rem' }}>
        <span className="section-label">EDITORIAL CAMPAIGN</span>
        <h1 className="section-title">THE LOOKBOOK</h1>
        <p className="section-subtitle">
          An exploration of form, natural drape, and timeless quiet luxury. Woven for the modern discerning woman.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        {editorialShots.map((shot, idx) => (
          <div 
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: idx % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
              gap: '4rem',
              alignItems: 'center'
            }}
          >
            <div style={{ order: idx % 2 === 0 ? 1 : 2, position: 'relative', borderRadius: 'var(--radius-sm)', overflow: 'hidden', boxShadow: 'var(--shadow-float)' }}>
              <img 
                src={shot.image} 
                alt={shot.title} 
                style={{ width: '100%', height: '520px', objectFit: 'cover' }} 
              />
            </div>

            <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
              <span className="section-label">{shot.season}</span>
              <h2 style={{ fontSize: '2.4rem', margin: '0.5rem 0 1.25rem' }}>{shot.title}</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
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
