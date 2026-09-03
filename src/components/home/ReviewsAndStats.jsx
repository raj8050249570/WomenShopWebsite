import React, { useState } from 'react';
import { Star, Users, Globe, Award, Sparkles } from 'lucide-react';
import { customerReviews } from '../../data/reviews';
import { trustStats } from '../../data/categories';

export default function ReviewsAndStats() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const currentReview = customerReviews[activeReviewIndex];

  const getStatIcon = (label) => {
    switch (label) {
      case 'Happy Customers': return <Users size={22} />;
      case '5-Star Reviews': return <Star size={22} />;
      case 'Countries Shipping': return <Globe size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  return (
    <section className="reviews-stats-section">
      <div className="container">
        <div className="reviews-stats-grid">
          {/* Left: What Our Customers Say */}
          <div className="reviews-box">
            <div>
              <h3 className="review-section-title">WHAT OUR CUSTOMERS SAY</h3>
              <div className="review-content-row">
                <div>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={17} fill="#C5A880" color="#C5A880" />
                    ))}
                  </div>
                  <blockquote className="review-text">
                    "{currentReview.review}"
                  </blockquote>
                  <div className="review-author">— {currentReview.author}</div>
                </div>

                <img 
                  src={currentReview.image} 
                  alt={currentReview.author} 
                  className="review-customer-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="review-nav-dots">
              {customerReviews.map((_, idx) => (
                <button
                  key={idx}
                  className={`review-dot ${idx === activeReviewIndex ? 'active' : ''}`}
                  onClick={() => setActiveReviewIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Trusted By Thousands */}
          <div className="trust-stats-box">
            <h3 className="trust-stats-title">TRUSTED BY THOUSANDS</h3>
            <div className="trust-stats-grid">
              {trustStats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-icon">
                    {getStatIcon(stat.label)}
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
