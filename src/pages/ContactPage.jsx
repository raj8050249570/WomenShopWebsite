import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function ContactPage() {
  const { showToast } = useShop();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Order Inquiry', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your message has been sent to our concierge team.');
  };

  return (
    <div className="container" style={{ padding: '3rem 0 6rem' }}>
      <div className="section-header" style={{ marginBottom: '3.5rem' }}>
        <span className="section-label">CLIENT CONCIERGE</span>
        <h1 className="section-title">WE ARE AT YOUR SERVICE</h1>
        <p className="section-subtitle">
          Whether you need styling assistance, sizing advice, or order inquiries, our team is delighted to assist.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
        {/* Contact Form */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)', boxShadow: 'var(--shadow-card)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <CheckCircle2 size={44} color="var(--color-olive-dark)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Message Received</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Thank you for reaching out. A client advisor will respond within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.4rem', textTransform: 'uppercase' }}>Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Lady Evelyn"
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.4rem', textTransform: 'uppercase' }}>Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. evelyn@example.com"
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.4rem', textTransform: 'uppercase' }}>Subject</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem', backgroundColor: '#FFFFFF' }}
                >
                  <option value="Order Inquiry">Order Inquiry</option>
                  <option value="Styling & Sizing Advice">Styling & Sizing Advice</option>
                  <option value="Returns & Exchanges">Returns & Exchanges</option>
                  <option value="Press & Collaborations">Press & Collaborations</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.4rem', textTransform: 'uppercase' }}>Your Message</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How may we assist your wardrobe today?"
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                <span>SEND MESSAGE</span>
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ padding: '1.75rem', backgroundColor: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Mail size={20} color="var(--color-olive-dark)" />
              <h4 style={{ fontSize: '1rem' }}>Email Concierge</h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
              hello@belgaumfashion.com<br />
              concierge@belgaumfashion.com
            </p>
          </div>

          <div style={{ padding: '1.75rem', backgroundColor: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Phone size={20} color="var(--color-olive-dark)" />
              <h4 style={{ fontSize: '1rem' }}>Direct Line</h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
              +1 (234) 567-890<br />
              Toll Free: 1-800-BELGAUM
            </p>
          </div>

          <div style={{ padding: '1.75rem', backgroundColor: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Clock size={20} color="var(--color-olive-dark)" />
              <h4 style={{ fontSize: '1rem' }}>Hours of Service</h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
              Monday – Friday: 9:00 AM – 7:00 PM EST<br />
              Saturday: 10:00 AM – 5:00 PM EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
