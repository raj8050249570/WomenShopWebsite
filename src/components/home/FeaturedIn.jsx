import React from 'react';
import { editorialBrands } from '../../data/categories';

export default function FeaturedIn() {
  return (
    <section className="featured-in-section">
      <div className="container">
        <h3 className="featured-in-title">FEATURED IN</h3>
        <div className="editorial-press-grid">
          {editorialBrands.map((brand, idx) => (
            <div 
              key={idx} 
              className={`press-brand-item ${brand.fontStyle}`}
              style={{ fontWeight: brand.weight }}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
