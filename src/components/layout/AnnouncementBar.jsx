import React, { useState, useEffect } from 'react';
import { Truck, RotateCcw, ShieldCheck, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

const announcements = [
  { icon: <Truck size={13} />, text: 'FREE SHIPPING ON ORDERS OVER $99' },
  { icon: <RotateCcw size={13} />, text: 'EASY 30-DAY RETURNS & EXCHANGES' },
  { icon: <ShieldCheck size={13} />, text: '100% SECURE CHECKOUT' },
  { icon: <Tag size={13} />, text: 'USE CODE WELCOME10 FOR 10% OFF' }
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % announcements.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % announcements.length);
  };

  return (
    <div className="announcement-bar">
      <div className="container announcement-bar-inner">
        {/* Desktop: 4 items in a clean row */}
        <div className="announcement-list desktop-announcements">
          {announcements.map((item, idx) => (
            <div key={idx} className="announcement-item">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet: Smooth single announcement slider */}
        <div className="mobile-announcement-slider">
          <button 
            className="announcement-nav-btn" 
            onClick={handlePrev} 
            aria-label="Previous announcement"
          >
            <ChevronLeft size={13} />
          </button>
          
          <div className="mobile-announcement-content" key={currentIndex}>
            <span className="announcement-slider-icon">{announcements[currentIndex].icon}</span>
            <span className="announcement-slider-text">{announcements[currentIndex].text}</span>
          </div>

          <button 
            className="announcement-nav-btn" 
            onClick={handleNext} 
            aria-label="Next announcement"
          >
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
