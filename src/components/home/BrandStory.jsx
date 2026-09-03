import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function BrandStory() {
  const { navigateTo } = useShop();

  return (
    <section className="brand-story-section">
      <div className="container">
        <div className="brand-story-card">
          <img 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85" 
            alt="Belgaum Atelier Story" 
            className="brand-story-bg"
            loading="lazy"
          />
          <div className="brand-story-overlay" />
          
          <div className="brand-story-content">
            <span className="brand-story-label">OUR STORY</span>
            <h2 className="brand-story-title">
              Designed for<br />Modern Women
            </h2>
            <p className="brand-story-description">
              At Belgaum, we believe fashion is more than what you wear — it's how you express who you are. Our pieces blend modern elegance with everyday comfort.
            </p>
            <button 
              className="btn-primary"
              onClick={() => navigateTo('about')}
            >
              <span>READ OUR STORY</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
