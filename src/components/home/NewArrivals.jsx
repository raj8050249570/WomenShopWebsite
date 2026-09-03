import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
            <h2 className="section-title" style={{ fontSize: '1.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
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

        {/* 6-column / responsive grid matching ProductList.png */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem'
        }}>
          {newArrivalsList.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
