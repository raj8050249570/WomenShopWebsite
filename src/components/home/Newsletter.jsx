import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useShop();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Welcome to the Belgaum Circle! Check your inbox for your 10% code.');
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <h2 className="section-title" style={{ fontSize: '2rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            STAY STYLISH, ALWAYS
          </h2>
          <p className="section-subtitle">
            Join our community and get style updates, new arrivals & exclusive VIP drops directly in your inbox.
          </p>

          {subscribed ? (
            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              backgroundColor: '#EAEFE7',
              borderRadius: 'var(--radius-xs)',
              color: 'var(--color-olive-dark)',
              display: 'flex',
              flexWrap: 'wrap',
              maxWidth: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              wordBreak: 'break-word'
            }}>
              <CheckCircle size={20} color="var(--color-olive-dark)" />
              <span>Thank you for subscribing! Check your inbox for your welcome discount.</span>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary" style={{ padding: '0 2.25rem' }}>
                <span>SUBSCRIBE</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
