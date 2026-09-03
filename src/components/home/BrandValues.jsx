import React from 'react';
import { Leaf, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function BrandValues() {
  const values = [
    {
      icon: <Leaf size={22} strokeWidth={1.6} />,
      title: 'SUSTAINABLE FASHION',
      description: 'Conscious choices for a better tomorrow'
    },
    {
      icon: <Sparkles size={22} strokeWidth={1.6} />,
      title: 'LIMITED EDITIONS',
      description: "Exclusive styles you won't find anywhere"
    },
    {
      icon: <ShieldCheck size={22} strokeWidth={1.6} />,
      title: 'DESIGNED IN-HOUSE',
      description: 'Thoughtfully designed by our creative team'
    },
    {
      icon: <HeartHandshake size={22} strokeWidth={1.6} />,
      title: 'CUSTOMER LOVE',
      description: '4.9/5 average rating from 10K+ customers'
    }
  ];

  return (
    <div className="brand-values-strip">
      <div className="container">
        <div className="brand-values-grid">
          {values.map((val, idx) => (
            <div key={idx} className="value-card">
              <div className="value-icon-box">
                {val.icon}
              </div>
              <h4 className="value-title">{val.title}</h4>
              <p className="value-desc">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
