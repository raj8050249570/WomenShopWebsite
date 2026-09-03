import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Tag } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="announcement-list">
          <div className="announcement-item">
            <Truck size={14} />
            <span>FREE SHIPPING ON ORDERS OVER $99</span>
          </div>
          <div className="announcement-item">
            <RotateCcw size={14} />
            <span>EASY 30-DAY RETURNS</span>
          </div>
          <div className="announcement-item">
            <ShieldCheck size={14} />
            <span>SECURE PAYMENTS</span>
          </div>
          <div className="announcement-item">
            <Tag size={14} />
            <span>EXCLUSIVE OFFERS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
