import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { useCart } from '../../context/CartContext';

export default function OfferBanner() {
  const { navigateTo, showToast } = useShop();
  const { applyCoupon } = useCart();

  const handleClaimOffer = () => {
    applyCoupon('WELCOME10');
    showToast('Promo code WELCOME10 (10% OFF) claimed and added to your bag!');
    navigateTo('shop', 'all');
  };

  return (
    <section className="offer-banner-section">
      <div className="container">
        <div className="offer-banner-card">
          <div className="offer-banner-left">
            <div className="offer-gift-icon">
              <Gift size={26} strokeWidth={1.7} />
            </div>
            <div>
              <h3 className="offer-title">GET 10% OFF YOUR FIRST ORDER</h3>
              <p className="offer-subtitle">
                Sign up today and be the first to know about new drops and exclusive offers.
              </p>
            </div>
          </div>

          <div className="offer-cta-col">
            <button 
              className="btn-primary"
              onClick={handleClaimOffer}
            >
              <span>GET MY 10% OFF</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" 
            alt="Belgaum Special Offer" 
            className="offer-model-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
