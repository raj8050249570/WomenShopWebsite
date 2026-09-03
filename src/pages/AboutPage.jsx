import React from 'react';
import { ArrowRight, Leaf, Award, HeartHandshake } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function AboutPage() {
  const { navigateTo } = useShop();

  return (
    <div className="container" style={{ padding: '3rem 0 6rem' }}>
      <div className="section-header" style={{ marginBottom: '3.5rem' }}>
        <span className="section-label">THE ATELIER</span>
        <h1 className="section-title">OUR STORY & PHILOSOPHY</h1>
        <p className="section-subtitle">
          Belgaum was born out of a desire to create clothing that is effortlessly refined, meticulously tailored, and mindfully sourced.
        </p>
      </div>

      {/* Hero Banner */}
      <div style={{ position: 'relative', height: '440px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '4.5rem', boxShadow: 'var(--shadow-float)' }}>
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85" 
          alt="Belgaum Craftsmanship" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20, 24, 18, 0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: '#FAF8F5', maxWidth: '700px' }}>
            "Fashion is not merely what you wear; it is an enduring dialogue with the world."
          </h2>
        </div>
      </div>

      {/* 3 Pillars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
        <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-sm)' }}>
          <Leaf size={28} color="var(--color-olive-dark)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Conscious Craft</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
            We work exclusively with certified organic linens, pure mulberry silks, and OEKO-TEX certified mills to minimize ecological footprints.
          </p>
        </div>

        <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-sm)' }}>
          <Award size={28} color="var(--color-gold-dark)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>In-House Precision</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
            Every silhouette is engineered in our design studio, undergoing rigorous fit trials to ensure lasting comfort across body shapes.
          </p>
        </div>

        <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-sm)' }}>
          <HeartHandshake size={28} color="var(--color-olive-dark)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Empowered Elegance</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
            We celebrate modern women by creating wardrobe investments that stand the test of time, season after season.
          </p>
        </div>
      </div>

      {/* Atelier CTA */}
      <div style={{ textAlign: 'center', backgroundColor: 'var(--color-olive-dark)', color: '#FAF8F5', padding: '4rem 2rem', borderRadius: 'var(--radius-md)' }}>
        <h2 style={{ color: '#FAF8F5', fontSize: '2.2rem', marginBottom: '1rem' }}>
          Explore the Seasonal Collection
        </h2>
        <p style={{ color: '#D5D1C8', maxWidth: '540px', margin: '0 auto 2rem' }}>
          Discover our latest arrivals tailored for everyday grace and memorable occasions.
        </p>
        <button 
          className="btn-gold"
          onClick={() => navigateTo('shop', 'all')}
        >
          <span>SHOP NEW ARRIVALS</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
