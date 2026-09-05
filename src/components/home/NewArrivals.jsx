import React from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { useShop } from '../../context/ShopContext';
import ProductCard from '../shop/ProductCard';

export default function NewArrivals() {
  const { navigateTo } = useShop();
  // The first 6 products shown in the reference
  const newArrivalsList = products.slice(0, 6);

  return (
    <section className="new-arrivals-section">
      <div className="container">
        <div className="section-top-bar">
          <div>
            <h2 className="section-title">
              NEW ARRIVALS
            </h2>
          </div>

          <button 
            className="btn-link"
            onClick={() => navigateTo('shop', 'all')}
          >
            <span>VIEW ALL</span>
            <ArrowRight size={14} className="arrow" />
          </button>
        </div>

        {/* Responsive Product Grid */}
        <div className="new-arrivals-grid">
          {newArrivalsList.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
