import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ChevronRight, X } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/shop/ProductCard';

export default function ShopPage() {
  const { activeCategory, setActiveCategory, navigateTo } = useShop();
  const [selectedSize, setSelectedSize] = useState(null);
  const [maxPrice, setMaxPrice] = useState(250);
  const [sortBy, setSortBy] = useState('featured');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (activeCategory === 'sale') {
        if (!product.comparePrice) return false;
      } else if (activeCategory !== 'all' && product.category !== activeCategory && product.subCategory !== activeCategory) {
        return false;
      }

      // Price filter
      if (product.price > maxPrice) return false;

      // Size filter
      if (selectedSize && (!product.sizes || !product.sizes.includes(selectedSize))) {
        return false;
      }

      // In stock
      if (onlyInStock && !product.inStock) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [activeCategory, selectedSize, maxPrice, sortBy, onlyInStock]);

  const clearAllFilters = () => {
    setActiveCategory('all');
    setSelectedSize(null);
    setMaxPrice(250);
    setOnlyInStock(false);
  };

  const hasActiveFilters = activeCategory !== 'all' || selectedSize !== null || maxPrice < 250 || onlyInStock;

  return (
    <div className="shop-page container">
      {/* Breadcrumb */}
      <div className="shop-breadcrumb">
        <span style={{ cursor: 'pointer' }} onClick={() => navigateTo('home')}>Home</span>
        <ChevronRight size={12} />
        <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Shop</span>
        {activeCategory !== 'all' && (
          <>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--color-olive-dark)', fontWeight: 600 }}>{activeCategory.toUpperCase()}</span>
          </>
        )}
      </div>

      {/* Header Row */}
      <div className="shop-header-row">
        <div>
          <h1 className="shop-page-title">
            {activeCategory === 'all' ? 'SHOP ALL COLLECTION' : `${activeCategory.toUpperCase()}`}
          </h1>
          <div className="shop-product-count">
            Showing {filteredProducts.length} Luxury Pieces
          </div>
        </div>

        <div className="shop-controls">
          <select 
            className="shop-sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">SORT BY: FEATURED</option>
            <option value="newest">SORT BY: NEWEST</option>
            <option value="price-low">PRICE: LOW TO HIGH</option>
            <option value="price-high">PRICE: HIGH TO LOW</option>
            <option value="rating">TOP RATED</option>
          </select>
        </div>
      </div>

      {/* Active Filter Chips */}
      {hasActiveFilters && (
        <div className="active-filters-bar">
          <span style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
            Active Filters:
          </span>
          {activeCategory !== 'all' && (
            <span className="filter-tag">
              Category: {activeCategory}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setActiveCategory('all')} />
            </span>
          )}
          {selectedSize && (
            <span className="filter-tag">
              Size: {selectedSize}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedSize(null)} />
            </span>
          )}
          {maxPrice < 250 && (
            <span className="filter-tag">
              Under ${maxPrice}
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setMaxPrice(250)} />
            </span>
          )}
          {onlyInStock && (
            <span className="filter-tag">
              In Stock Only
              <X size={12} style={{ cursor: 'pointer' }} onClick={() => setOnlyInStock(false)} />
            </span>
          )}
          <button className="clear-all-btn" onClick={clearAllFilters}>
            Clear All
          </button>
        </div>
      )}

      {/* Layout Grid: Sidebar + Catalog */}
      <div className="shop-layout-grid">
        {/* Filter Sidebar */}
        <aside className="filter-sidebar">
          {/* Categories */}
          <div className="filter-group">
            <h4 className="filter-title">Category</h4>
            <div className="category-filter-list">
              <button 
                className={`category-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                <span>All Styles</span>
                <span>({products.length})</span>
              </button>
              {categories.map(c => (
                <button 
                  key={c.id}
                  className={`category-filter-btn ${activeCategory === c.slug ? 'active' : ''}`}
                  onClick={() => setActiveCategory(c.slug)}
                >
                  <span>{c.name}</span>
                  <span>({products.filter(p => p.category === c.slug || p.subCategory === c.slug).length})</span>
                </button>
              ))}
              <button 
                className={`category-filter-btn ${activeCategory === 'sale' ? 'active' : ''}`}
                onClick={() => setActiveCategory('sale')}
                style={{ color: '#a43e3e' }}
              >
                <span>Special Sale</span>
                <span>({products.filter(p => p.comparePrice).length})</span>
              </button>
            </div>
          </div>

          {/* Price Range */}
          <div className="filter-group">
            <h4 className="filter-title">Price Range</h4>
            <input 
              type="range" 
              min="30" 
              max="250" 
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="price-range-slider"
            />
            <div className="price-range-labels">
              <span>$30</span>
              <span style={{ fontWeight: 700, color: 'var(--color-olive-dark)' }}>Up to ${maxPrice}</span>
              <span>$250</span>
            </div>
          </div>

          {/* Sizes */}
          <div className="filter-group">
            <h4 className="filter-title">Size</h4>
            <div className="size-filter-grid">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`size-chip-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* In Stock Toggle */}
          <div className="filter-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={onlyInStock} 
                onChange={(e) => setOnlyInStock(e.target.checked)}
                style={{ accentColor: 'var(--color-olive-dark)', width: '16px', height: '16px' }}
              />
              <span style={{ fontWeight: 500 }}>In Stock Only</span>
            </label>
          </div>
        </aside>

        {/* Catalog Grid */}
        <main>
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: 'var(--color-bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>No Products Found</h3>
              <p>Try clearing your active filters to see all available luxury pieces.</p>
              <button 
                className="btn-primary" 
                style={{ marginTop: '1.5rem' }}
                onClick={clearAllFilters}
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          ) : (
            <div className="catalog-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
