import React, { useState, useEffect } from 'react';
import { X, Heart, ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function QuickViewModal() {
  const { quickViewProduct, closeQuickView, navigateTo, showToast } = useShop();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedColor(quickViewProduct.colors?.[0] || null);
      setSelectedSize(quickViewProduct.sizes?.[0] || 'S');
      setQty(1);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const isFavorited = isInWishlist(quickViewProduct.id);
  const activeImg = selectedColor?.image || quickViewProduct.images[0];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedColor, selectedSize, qty);
    showToast(`Added ${qty} × ${quickViewProduct.name} to your bag`);
    closeQuickView();
  };

  const handleViewFullDetails = () => {
    closeQuickView();
    navigateTo('product', quickViewProduct.slug);
  };

  return (
    <div className="modal-overlay" onClick={closeQuickView}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '820px', padding: '2rem' }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={closeQuickView} aria-label="Close modal">
          <X size={22} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
          {/* Product Image */}
          <div style={{ aspectRatio: '3/4', borderRadius: '4px', overflow: 'hidden', backgroundColor: 'var(--color-bg-subtle)' }}>
            <img src={activeImg} alt={quickViewProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Product Details Form */}
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
              {quickViewProduct.category}
            </span>
            <h3 style={{ fontSize: '1.65rem', margin: '0.35rem 0 0.75rem', fontFamily: 'var(--font-serif)' }}>
              {quickViewProduct.name}
            </h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', color: 'var(--color-gold-primary)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C5A880" color="#C5A880" />
                ))}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                ({quickViewProduct.reviewCount} reviews)
              </span>
            </div>

            <div style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              ${quickViewProduct.price.toFixed(2)}
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {quickViewProduct.description}
            </p>

            {/* Colors */}
            {quickViewProduct.colors && (
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  Color: <span style={{ fontWeight: 400, color: 'var(--color-text-secondary)' }}>{selectedColor?.name}</span>
                </div>
                <div className="color-options-row">
                  {quickViewProduct.colors.map((c, i) => (
                    <button
                      key={i}
                      className={`color-option-btn ${selectedColor?.name === c.name ? 'active' : ''}`}
                      style={{ backgroundColor: c.hex }}
                      onClick={() => setSelectedColor(c)}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {quickViewProduct.sizes && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  Size: <span style={{ fontWeight: 400, color: 'var(--color-text-secondary)' }}>{selectedSize}</span>
                </div>
                <div className="size-options-row">
                  {quickViewProduct.sizes.map((s, i) => (
                    <button
                      key={i}
                      className={`size-btn ${selectedSize === s ? 'active' : ''}`}
                      onClick={() => setSelectedSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
              <button 
                className="btn-primary" 
                style={{ flex: 1 }}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={15} /> Add to Bag
              </button>
              <button 
                className={`btn-secondary ${isFavorited ? 'active' : ''}`}
                style={{ padding: '0 1rem' }}
                onClick={() => toggleWishlist(quickViewProduct.id)}
              >
                <Heart size={16} fill={isFavorited ? '#c93b3b' : 'none'} color={isFavorited ? '#c93b3b' : 'currentColor'} />
              </button>
            </div>

            <button 
              className="btn-link" 
              style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}
              onClick={handleViewFullDetails}
            >
              <span>VIEW FULL PRODUCT DETAILS</span>
              <ArrowRight size={13} className="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
