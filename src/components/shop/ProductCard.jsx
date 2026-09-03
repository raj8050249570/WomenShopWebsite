import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useShop } from '../../context/ShopContext';

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { navigateTo, openQuickView, showToast } = useShop();

  const isFavorited = isInWishlist(product.id);
  const currentImage = selectedColor?.image || product.images?.[0];

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
    showToast(isFavorited ? 'Removed from wishlist' : 'Saved to wishlist');
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, selectedColor, product.sizes?.[0] || 'S');
    showToast(`Added ${product.name} to your bag`);
  };

  const handleQuickViewClick = (e) => {
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div className="product-card">
      {/* Product Image Frame */}
      <div 
        className="product-image-box"
        onClick={() => navigateTo('product', product.slug)}
      >
        <img 
          src={currentImage} 
          alt={product.name} 
          className="product-main-img"
          loading="lazy"
        />

        {product.badge && (
          <span className="badge badge-new product-card-badge">
            {product.badge}
          </span>
        )}

        <button 
          className={`product-wishlist-btn ${isFavorited ? 'active' : ''}`}
          onClick={handleWishlistClick}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} fill={isFavorited ? 'currentColor' : 'none'} strokeWidth={1.8} />
        </button>

        {/* Hover Quick Actions */}
        <div className="product-quick-actions">
          <button 
            className="quick-action-btn"
            onClick={handleQuickViewClick}
          >
            <Eye size={13} style={{ display: 'inline', marginRight: '4px' }} /> Quick View
          </button>
          <button 
            className="quick-action-btn"
            onClick={handleQuickAdd}
          >
            <ShoppingBag size={13} style={{ display: 'inline', marginRight: '4px' }} /> + Bag
          </button>
        </div>
      </div>

      {/* Product Body */}
      <div className="product-card-body">
        <h4 
          className="product-card-title"
          onClick={() => navigateTo('product', product.slug)}
        >
          {product.name}
        </h4>

        <div className="product-card-price-row">
          <span className="product-card-price">${product.price.toFixed(2)}</span>
          {product.comparePrice && (
            <span className="product-card-compare-price">${product.comparePrice.toFixed(2)}</span>
          )}
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="product-swatches">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                className={`swatch-dot ${selectedColor?.name === color.name ? 'active' : ''}`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
