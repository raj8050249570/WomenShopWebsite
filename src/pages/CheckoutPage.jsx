import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Lock, CreditCard, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useShop } from '../context/ShopContext';
import confetti from 'canvas-confetti';

export default function CheckoutPage() {
  const { cart, subtotal, shippingCost, discountAmount, total, clearCart } = useCart();
  const { navigateTo } = useShop();

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [formData, setFormData] = useState({
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor.vance@luxuryfashion.com',
    address: '742 Evergreen Terrace',
    city: 'Belgaum',
    state: 'KA',
    zip: '590001',
    country: 'India',
    cardNumber: '•••• •••• •••• 4242',
    expDate: '12/28',
    cvv: '•••'
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedOrder = 'BLG-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(generatedOrder);
    setOrderPlaced(true);
    clearCart();

    // Trigger confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3A4537', '#C5A880', '#EAEFE7', '#D4AF37']
    });
  };

  if (orderPlaced) {
    return (
      <div className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center', maxWidth: '640px' }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'var(--color-olive-bg)', color: 'var(--color-olive-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <CheckCircle2 size={38} strokeWidth={2} />
        </div>
        <span className="section-label">ORDER CONFIRMED</span>
        <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0 1rem' }}>
          Thank You, {formData.firstName}
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
          Your order <strong>#{orderNumber}</strong> has been received and is being prepared with exquisite care by our atelier team.
        </p>

        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', textAlign: 'left', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            Confirmation sent to: <strong>{formData.email}</strong>
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
            Shipping destination: <strong>{formData.address}, {formData.city}, {formData.zip}</strong>
          </div>
        </div>

        <button className="btn-primary" onClick={() => navigateTo('home')}>
          <span>RETURN TO STORE HOME</span>
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
      {/* Breadcrumb */}
      <div className="shop-breadcrumb">
        <span style={{ cursor: 'pointer' }} onClick={() => navigateTo('home')}>Home</span>
        <ChevronRight size={12} />
        <span style={{ cursor: 'pointer' }} onClick={() => navigateTo('cart')}>Bag</span>
        <ChevronRight size={12} />
        <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Checkout</span>
      </div>

      <div className="checkout-layout-grid">
        {/* Left: Customer Information & Payment */}
        <form onSubmit={handlePlaceOrder}>
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>1. Contact & Delivery</span>
            </h2>

            <div className="checkout-form-row">
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase' }}>First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase' }}>Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase' }}>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase' }}>Street Address</label>
              <input 
                type="text" 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
              />
            </div>

            <div className="checkout-form-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase' }}>City</label>
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase' }}>State</label>
                <input 
                  type="text" 
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase' }}>Postal Code</label>
                <input 
                  type="text" 
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>2. Payment Details</span>
            </h2>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <button 
                type="button"
                className={`btn-secondary ${paymentMethod === 'card' ? 'active' : ''}`}
                style={{ flex: 1, backgroundColor: paymentMethod === 'card' ? 'var(--color-olive-dark)' : '#FFFFFF', color: paymentMethod === 'card' ? '#FAF8F5' : 'var(--color-text-primary)' }}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard size={16} /> Credit Card
              </button>
              <button 
                type="button"
                className={`btn-secondary ${paymentMethod === 'apple' ? 'active' : ''}`}
                style={{ flex: 1, backgroundColor: paymentMethod === 'apple' ? 'var(--color-olive-dark)' : '#FFFFFF', color: paymentMethod === 'apple' ? '#FAF8F5' : 'var(--color-text-primary)' }}
                onClick={() => setPaymentMethod('apple')}
              >
                Apple Pay / UPI
              </button>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-sm)', padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase' }}>Card Number</label>
                <input 
                  type="text" 
                  defaultValue={formData.cardNumber}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase' }}>Expiry Date</label>
                  <input 
                    type="text" 
                    defaultValue={formData.expDate}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase' }}>CVV</label>
                  <input 
                    type="text" 
                    defaultValue={formData.cvv}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-gold" 
            style={{ width: '100%', padding: '1.2rem', fontSize: '0.9rem', letterSpacing: '0.14em' }}
          >
            <Lock size={16} /> COMPLETE LUXURY ORDER — ${total.toFixed(2)}
          </button>
        </form>

        {/* Right: Order Summary */}
        <div style={{ backgroundColor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-sm)', padding: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border-light)', marginBottom: '1.5rem' }}>
            ORDER RECAP ({cart.length} ITEMS)
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '280px', overflowY: 'auto', marginBottom: '1.5rem', paddingRight: '0.5rem' }}>
            {cart.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '65px', objectFit: 'cover', borderRadius: 'var(--radius-xs)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{item.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                    Qty: {item.quantity} | {item.selectedSize}
                  </div>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)', fontSize: '0.88rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)' }}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {discountAmount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-olive-dark)', fontWeight: 600 }}>
                <span>VIP Discount</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)' }}>
              <span>Express Shipping</span>
              <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 700, paddingTop: '0.75rem', borderTop: '1px solid var(--color-border-light)' }}>
              <span>Total</span>
              <span style={{ color: 'var(--color-olive-dark)' }}>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
