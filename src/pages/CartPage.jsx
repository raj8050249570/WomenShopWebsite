import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Tag, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useShop } from '../context/ShopContext';

export default function CartPage() {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    subtotal, 
    shippingCost, 
    discountAmount, 
    total, 
    appliedCoupon, 
    applyCoupon, 
    removeCoupon,
    shippingThreshold 
  } = useCart();
  const { navigateTo, showToast } = useShop();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    if (res.success) {
      setCouponError('');
      showToast(res.message);
      setCouponInput('');
    } else {
      setCouponError(res.message);
    }
  };

  const progressPercent = Math.min(100, (subtotal / shippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, shippingThreshold - subtotal);

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <ShoppingBag size={56} strokeWidth={1} style={{ margin: '0 auto 1.5rem', color: 'var(--color-text-muted)' }} />
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '1rem' }}>
          Your Shopping Bag is Empty
        </h1>
        <p style={{ maxWidth: '460px', margin: '0 auto 2rem' }}>
          Explore our latest collection of luxury essentials, fluid silhouettes, and editorial tailoring.
        </p>
        <button className="btn-primary" onClick={() => navigateTo('shop', 'all')}>
          <span>EXPLORE NEW ARRIVALS</span>
          <ArrowRight size={15} />
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '3rem 0 6rem' }}>
      {/* Breadcrumb */}
      <div className="shop-breadcrumb">
        <span style={{ cursor: 'pointer' }} onClick={() => navigateTo('home')}>Home</span>
        <ChevronRight size={12} />
        <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Shopping Bag</span>
      </div>

      <h1 style={{ fontSize: '2.4rem', marginBottom: '2rem', letterSpacing: '0.02em' }}>
        YOUR SHOPPING BAG ({cart.reduce((s, i) => s + i.quantity, 0)})
      </h1>

      {/* Free Shipping Alert Box */}
      <div style={{ backgroundColor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border-light)', padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
          {remainingForFreeShipping === 0 ? (
            <span style={{ color: 'var(--color-olive-dark)' }}>🎉 Congratulations! You have unlocked Complimentary Free Shipping.</span>
          ) : (
            <span>Add <strong>${remainingForFreeShipping.toFixed(2)}</strong> more to receive Free Luxury Shipping.</span>
          )}
        </div>
        <div className="shipping-progress-track" style={{ height: '6px' }}>
          <div className="shipping-progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Cart Grid: Items table on left + Order summary on right */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '3.5rem', alignItems: 'flex-start' }}>
        {/* Table of items */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {cart.map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr auto auto',
                  gap: '1.5rem',
                  alignItems: 'center',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid var(--color-border-light)'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '100px', height: '130px', objectFit: 'cover', borderRadius: 'var(--radius-xs)' }} 
                />

                <div>
                  <h3 
                    style={{ fontSize: '1.1rem', cursor: 'pointer', marginBottom: '0.35rem' }}
                    onClick={() => navigateTo('product', item.slug)}
                  >
                    {item.name}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                    Color: <strong>{item.selectedColor?.name}</strong> | Size: <strong>{item.selectedSize}</strong>
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                    ${item.price.toFixed(2)} each
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="qty-stepper">
                  <button className="qty-btn" onClick={() => updateQuantity(idx, -1)}>
                    <Minus size={13} />
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => updateQuantity(idx, 1)}>
                    <Plus size={13} />
                  </button>
                </div>

                {/* Subtotal & Delete */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button 
                    onClick={() => removeFromCart(idx)}
                    style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                    title="Remove item"
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="btn-link" 
            style={{ marginTop: '2rem' }}
            onClick={() => navigateTo('shop', 'all')}
          >
            ← CONTINUE SHOPPING
          </button>
        </div>

        {/* Order Summary Box */}
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-sm)', padding: '2rem', boxShadow: 'var(--shadow-card)' }}>
          <h3 style={{ fontSize: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border-light)', marginBottom: '1.5rem' }}>
            ORDER SUMMARY
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)' }}>
              <span>Subtotal</span>
              <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>${subtotal.toFixed(2)}</span>
            </div>

            {discountAmount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-olive-dark)', fontWeight: 600 }}>
                <span>VIP Discount (10% OFF)</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)' }}>
              <span>Estimated Shipping</span>
              <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 700, paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
              <span>Total</span>
              <span style={{ color: 'var(--color-olive-dark)' }}>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Promo Code Input */}
          <div style={{ marginBottom: '1.75rem' }}>
            {appliedCoupon ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', backgroundColor: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-xs)', fontSize: '0.82rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-olive-dark)', fontWeight: 600 }}>
                  <Tag size={15} /> {appliedCoupon} Applied
                </span>
                <button onClick={removeCoupon} style={{ color: '#a43e3e', fontSize: '0.75rem', fontWeight: 600 }}>
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem' }}>
                <input 
                  type="text" 
                  placeholder="Promo code (Try WELCOME10)" 
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  style={{ flex: 1, padding: '0.65rem 0.85rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.8rem', outline: 'none' }}
                />
                <button type="submit" className="btn-secondary" style={{ padding: '0.65rem 1rem', fontSize: '0.75rem' }}>
                  APPLY
                </button>
              </form>
            )}
            {couponError && (
              <div style={{ color: '#a43e3e', fontSize: '0.75rem', marginTop: '0.4rem' }}>{couponError}</div>
            )}
          </div>

          <button 
            className="btn-primary" 
            style={{ width: '100%', padding: '1rem', fontSize: '0.85rem' }}
            onClick={() => navigateTo('checkout')}
          >
            <span>PROCEED TO CHECKOUT</span>
            <ArrowRight size={16} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.25rem', fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
            <ShieldCheck size={16} color="var(--color-olive-dark)" />
            <span>Encrypted 256-Bit SSL Luxury Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
