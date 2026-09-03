import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { products } from '../../data/products';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, navigateTo } = useShop();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim() === '' 
    ? [] 
    : products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  const popularSearches = ['Linen Blazer', 'Satin Dress', 'Wide Leg Trousers', 'Co-ord Sets', 'Quilted Bag'];

  const handleSelectProduct = (slug) => {
    setIsSearchOpen(false);
    navigateTo('product', slug);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsSearchOpen(false)}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '650px', padding: '2rem' }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn" 
          onClick={() => setIsSearchOpen(false)}
          aria-label="Close search"
        >
          <X size={22} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderBottom: '1.5px solid var(--color-olive-dark)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
          <Search size={22} color="var(--color-olive-dark)" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search for dresses, blazers, trousers..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              fontSize: '1.15rem',
              width: '100%',
              fontFamily: 'var(--font-sans)',
              backgroundColor: 'transparent'
            }}
          />
        </div>

        {query.trim() === '' ? (
          <div>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              POPULAR SEARCHES
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
              {popularSearches.map((term, idx) => (
                <button 
                  key={idx}
                  className="filter-tag"
                  style={{ cursor: 'pointer', backgroundColor: 'var(--color-bg-subtle)' }}
                  onClick={() => setQuery(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '1rem', fontWeight: 600 }}>
              {filteredProducts.length} Results Found
            </div>

            {filteredProducts.length === 0 ? (
              <p style={{ color: 'var(--color-text-secondary)', padding: '1rem 0' }}>No luxury pieces match "{query}". Try checking your spelling or search another category.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '350px', overflowY: 'auto' }}>
                {filteredProducts.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => handleSelectProduct(p.slug)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.5rem',
                      borderRadius: 'var(--radius-xs)',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-subtle)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <img 
                      src={p.images[0]} 
                      alt={p.name} 
                      style={{ width: '48px', height: '60px', objectFit: 'cover', borderRadius: '2px' }} 
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                        {p.name}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                        ${p.price.toFixed(2)}
                      </div>
                    </div>
                    <ArrowRight size={16} color="var(--color-text-muted)" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
