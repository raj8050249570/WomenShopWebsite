import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useShop } from '../../context/ShopContext';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    subtotal, 
    shippingThreshold,
    shippingCost,
    discountAmount,
    total 
  } = useCart();
  const { navigateTo } = useShop();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, (subtotal / shippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, shippingThreshold - subtotal);

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    navigateTo('checkout');
  };

  const handleViewCartClick = () => {
    setIsCartOpen(false);
    navigateTo('cart');
  };

  return (
    <div className={`drawer-backdrop ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} color="var(--color-olive-dark)" />
            <h3 className="drawer-title">YOUR SHOPPING BAG</h3>
          </div>
          <button 
            className="modal-close-btn" 
            style={{ position: 'static' }} 
            onClick={() => setIsCartOpen(false)}
            aria-label="Close bag"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="free-shipping-box">
          <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {remainingForFreeShipping === 0 ? (
              <span style={{ color: 'var(--color-olive-dark)' }}>🎉 You unlocked Free Luxury Shipping!</span>
            ) : (
              <span>Add <strong>${remainingForFreeShipping.toFixed(2)}</strong> more for FREE Shipping</span>
            )}
          </div>
          <div className="shipping-progress-track">
            <div 
              className="shipping-progress-fill" 
              style={{ width: `${progressPercent}%` }} 
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="drawer-items-list">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--color-text-secondary)' }}>
              <ShoppingBag size={48} strokeWidth={1} style={{ margin: '0 auto 1rem', color: 'var(--color-text-muted)' }} />
              <p style={{ fontWeight: 500 }}>Your shopping bag is currently empty.</p>
              <button 
                className="btn-primary" 
                style={{ marginTop: '1.5rem', width: '100%' }}
                onClick={() => {
                  setIsCartOpen(false);
                  navigateTo('shop', 'all');
                }}
              >
                <span>EXPLORE NEW ARRIVALS</span>
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="cart-item-row">
                <img src={item.image} alt={item.name} className="cart-item-thumb" />
                <div>
                  <h4 
                    className="cart-item-name"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setIsCartOpen(false);
                      navigateTo('product', item.slug);
                    }}
                  >
                    {item.name}
                  </h4>
                  <div className="cart-item-variant">
                    {item.selectedColor?.name} / Size {item.selectedSize}
                  </div>
                  <div className="cart-item-price">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                  <button 
                    onClick={() => removeFromCart(idx)}
                    style={{ color: 'var(--color-text-muted)', padding: '4px' }}
                    title="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                  <div className="qty-stepper" style={{ transform: 'scale(0.85)', transformOrigin: 'right center' }}>
                    <button className="qty-btn" onClick={() => updateQuantity(idx, -1)}>
                      <Minus size={12} />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(idx, 1)}>
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="drawer-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            {discountAmount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--color-olive-dark)', fontWeight: 600 }}>
                <span>Discount (10% OFF)</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--color-text-secondary)' }}>
              <span>Shipping</span>
              <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
            </div>

            <div className="drawer-subtotal-row">
              <span>Estimated Total</span>
              <span style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)' }}>${total.toFixed(2)}</span>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%', marginBottom: '0.75rem' }}
              onClick={handleCheckoutClick}
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={15} />
            </button>

            <button 
              className="btn-secondary" 
              style={{ width: '100%', fontSize: '0.75rem', padding: '0.65rem' }}
              onClick={handleViewCartClick}
            >
              VIEW FULL BAG
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
