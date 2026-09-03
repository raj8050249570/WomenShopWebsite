import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/categories';
import { useShop } from '../../context/ShopContext';

export default function CategorySection() {
  const { navigateTo } = useShop();

  return (
    <section className="category-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            SHOP BY CATEGORY
          </h2>
        </div>

        <div className="category-grid">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="category-card"
              onClick={() => navigateTo('shop', cat.slug)}
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="category-card-img"
                loading="lazy"
              />
              <div className="category-card-overlay">
                <h3 className="category-name">{cat.name}</h3>
                <span className="category-cta">
                  SHOP NOW <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
