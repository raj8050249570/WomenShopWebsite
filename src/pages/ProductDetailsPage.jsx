import React, { useState, useEffect } from 'react';
import { Star, Heart, ShoppingBag, Truck, RotateCcw, ShieldCheck, ChevronDown, ChevronUp, ChevronRight, Share2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';
import ProductCard from '../components/shop/ProductCard';
import SizeGuideModal from '../components/common/SizeGuideModal';

export default function ProductDetailsPage() {
  const { currentProduct, navigateTo, showToast } = useShop();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  
  // Accordions state
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (currentProduct) {
      setSelectedColor(currentProduct.colors?.[0] || null);
      setSelectedSize(currentProduct.sizes?.[0] || 'S');
      setActiveImageIndex(0);
      setQuantity(1);
    }
  }, [currentProduct]);

  if (!currentProduct) {
    return (
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => navigateTo('shop', 'all')}>
          Return to Shop
        </button>
      </div>
    );
  }

  const isFavorited = isInWishlist(currentProduct.id);
  const displayImages = currentProduct.images || [];
  const currentImage = displayImages[activeImageIndex] || displayImages[0];

  const handleAddToCart = () => {
    addToCart(currentProduct, selectedColor, selectedSize, quantity);
    showToast(`Added ${quantity} × ${currentProduct.name} to your bag`);
  };

  const handleBuyNow = () => {
    addToCart(currentProduct, selectedColor, selectedSize, quantity);
    navigateTo('checkout');
  };

  const relatedProducts = products
    .filter(p => p.id !== currentProduct.id && (p.category === currentProduct.category || p.subCategory === currentProduct.subCategory))
    .slice(0, 4);

  return (
    <div className="product-details-page container">
      {/* Breadcrumb */}
      <div className="shop-breadcrumb">
        <span style={{ cursor: 'pointer' }} onClick={() => navigateTo('home')}>Home</span>
        <ChevronRight size={12} />
        <span style={{ cursor: 'pointer' }} onClick={() => navigateTo('shop', 'all')}>Shop</span>
        <ChevronRight size={12} />
        <span style={{ cursor: 'pointer' }} onClick={() => navigateTo('shop', currentProduct.category)}>
          {currentProduct.category.toUpperCase()}
        </span>
        <ChevronRight size={12} />
        <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{currentProduct.name}</span>
      </div>

      {/* Main Product Layout */}
      <div className="product-details-grid">
        {/* Left: Gallery */}
        <div className="gallery-container">
          <div className="gallery-thumbs">
            {displayImages.map((img, idx) => (
              <div 
                key={idx}
                className={`thumb-item ${idx === activeImageIndex ? 'active' : ''}`}
                onClick={() => setActiveImageIndex(idx)}
              >
                <img src={img} alt={`${currentProduct.name} ${idx + 1}`} />
              </div>
            ))}
          </div>

          <div className="gallery-main-view">
            <img src={currentImage} alt={currentProduct.name} className="gallery-main-img" />
          </div>
        </div>

        {/* Right: Info & Actions */}
        <div className="product-info-panel">
          {currentProduct.badge && (
            <span className="badge badge-new" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
              {currentProduct.badge}
            </span>
          )}

          <h1 className="product-detail-title">{currentProduct.name}</h1>

          {/* Reviews & Star Rating */}
          <div className="product-reviews-summary">
            <div style={{ display: 'flex', color: 'var(--color-gold-primary)' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#C5A880" color="#C5A880" />
              ))}
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
              {currentProduct.rating} ({currentProduct.reviewCount} customer reviews)
            </span>
          </div>

          {/* Price */}
          <div className="product-detail-price-row">
            <span className="product-detail-price">${currentProduct.price.toFixed(2)}</span>
            {currentProduct.comparePrice && (
              <span className="product-detail-compare">${currentProduct.comparePrice.toFixed(2)}</span>
            )}
            {currentProduct.comparePrice && (
              <span className="badge badge-sale">SAVE ${(currentProduct.comparePrice - currentProduct.price).toFixed(2)}</span>
            )}
          </div>

          {/* Color Selection */}
          {currentProduct.colors && (
            <div className="product-selector-group">
              <div className="selector-label-row">
                <span>Color: <strong style={{ color: 'var(--color-olive-dark)' }}>{selectedColor?.name}</strong></span>
              </div>
              <div className="color-options-row">
                {currentProduct.colors.map((c, idx) => (
                  <button
                    key={idx}
                    className={`color-option-btn ${selectedColor?.name === c.name ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    onClick={() => {
                      setSelectedColor(c);
                      // Update main gallery view to color's image
                      const foundIdx = currentProduct.images.indexOf(c.image);
                      if (foundIdx > -1) setActiveImageIndex(foundIdx);
                    }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {currentProduct.sizes && (
            <div className="product-selector-group">
              <div className="selector-label-row">
                <span>Size: <strong style={{ color: 'var(--color-olive-dark)' }}>{selectedSize}</strong></span>
                <span className="size-guide-link" onClick={() => setIsSizeGuideOpen(true)}>
                  Size Guide
                </span>
              </div>
              <div className="size-options-row">
                {currentProduct.sizes.map((s, idx) => (
                  <button
                    key={idx}
                    className={`size-btn ${selectedSize === s ? 'active' : ''}`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & CTA Buttons */}
          <div className="qty-cta-row">
            <div className="qty-stepper">
              <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span className="qty-value">{quantity}</span>
              <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>

            <button className="btn-primary add-to-cart-btn" onClick={handleAddToCart}>
              <ShoppingBag size={16} />
              <span>ADD TO BAG</span>
            </button>

            <button 
              className={`btn-secondary ${isFavorited ? 'active' : ''}`} 
              style={{ padding: '0 1.25rem' }}
              onClick={() => {
                toggleWishlist(currentProduct.id);
                showToast(isFavorited ? 'Removed from wishlist' : 'Saved to wishlist');
              }}
              title="Add to Wishlist"
            >
              <Heart size={18} fill={isFavorited ? '#c93b3b' : 'none'} color={isFavorited ? '#c93b3b' : 'currentColor'} />
            </button>
          </div>

          <button className="btn-gold buy-now-btn" onClick={handleBuyNow}>
            <span>BUY NOW — FAST CHECKOUT</span>
          </button>

          {/* Quick Perks */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', padding: '1rem', backgroundColor: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-xs)', fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Truck size={15} color="var(--color-olive-dark)" />
              <span>Free US shipping over $99</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RotateCcw size={15} color="var(--color-olive-dark)" />
              <span>Complimentary 30-day returns</span>
            </div>
          </div>

          {/* Accordions */}
          <div className="product-accordions">
            {/* Description */}
            <div className="accordion-item">
              <button 
                className="accordion-header" 
                onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                <span>Description & Fit</span>
                {openAccordion === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openAccordion === 'description' && (
                <div className="accordion-body">
                  <p>{currentProduct.description}</p>
                </div>
              )}
            </div>

            {/* Details & Fabric */}
            <div className="accordion-item">
              <button 
                className="accordion-header" 
                onClick={() => setOpenAccordion(openAccordion === 'details' ? '' : 'details')}
              >
                <span>Fabric, Material & Care</span>
                {openAccordion === 'details' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openAccordion === 'details' && (
                <div className="accordion-body">
                  <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {currentProduct.details?.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Shipping & Delivery */}
            <div className="accordion-item">
              <button 
                className="accordion-header" 
                onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
              >
                <span>Shipping & Complimentary Returns</span>
                {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openAccordion === 'shipping' && (
                <div className="accordion-body">
                  <p>
                    Standard delivery (3-5 business days) is complimentary on all orders over $99. Express 2-day delivery is available at checkout. Items may be returned within 30 days of receipt provided they are unworn, unwashed, and in original luxury packaging with tags intact.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--color-border-light)' }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <span className="section-label">COMPLETE THE LOOK</span>
            <h2 className="section-title">You May Also Admire</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
}
