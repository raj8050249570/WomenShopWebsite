import React from 'react';
import { Award, Sparkles, RotateCcw, Globe, ShieldCheck } from 'lucide-react';

export default function BenefitsBar() {
  const benefits = [
    {
      icon: <Award size={20} strokeWidth={1.7} />,
      title: 'PREMIUM QUALITY',
      subtitle: 'Finest Fabrics'
    },
    {
      icon: <Sparkles size={20} strokeWidth={1.7} />,
      title: 'TRENDY DESIGNS',
      subtitle: 'Stay Ahead Always'
    },
    {
      icon: <RotateCcw size={20} strokeWidth={1.7} />,
      title: 'EASY RETURNS',
      subtitle: '30-Day Policy'
    },
    {
      icon: <Globe size={20} strokeWidth={1.7} />,
      title: 'WORLDWIDE SHIPPING',
      subtitle: 'Fast & Reliable'
    },
    {
      icon: <ShieldCheck size={20} strokeWidth={1.7} />,
      title: 'SECURE CHECKOUT',
      subtitle: '100% Protected'
    }
  ];

  return (
    <div className="container benefits-bar-container">
      <div className="benefits-bar no-scrollbar">
        {benefits.map((item, idx) => (
          <div key={idx} className="benefit-item">
            <div className="benefit-icon">
              {item.icon}
            </div>
            <div className="benefit-text">
              <span className="benefit-title">{item.title}</span>
              <span className="benefit-subtitle">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mobile-swipe-indicator">
        <span>← Swipe to explore perks →</span>
      </div>
    </div>
  );
}
