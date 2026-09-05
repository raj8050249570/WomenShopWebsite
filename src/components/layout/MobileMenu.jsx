import React, { useEffect, useRef } from 'react';
import { X, ChevronRight, Heart, ShoppingBag, Search, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import gsap from 'gsap';

export default function MobileMenu({ isOpen, onClose }) {
  const { navigateTo, setIsSearchOpen } = useShop();
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();
  
  const drawerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      // Prevent background scrolling when mobile menu is open
      document.body.style.overflow = 'hidden';

      const ctx = gsap.context(() => {
        gsap.fromTo(drawerRef.current, 
          { x: '-100%' }, 
          { x: '0%', duration: 0.4, ease: 'power3.out' }
        );
        gsap.fromTo('.mobile-nav-item',
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.35, stagger: 0.04, ease: 'power2.out', delay: 0.1 }
        );
      });

      return () => {
        document.body.style.overflow = '';
        ctx.revert();
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNav = (page, param) => {
    navigateTo(page, param);
    onClose();
  };

  const navItems = [
    { label: 'NEW IN', page: 'shop', param: 'all', badge: 'NEW' },
    { label: 'CLOTHING', page: 'shop', param: 'clothing' },
    { label: 'DRESSES', page: 'shop', param: 'dresses' },
    { label: 'TOPS', page: 'shop', param: 'tops' },
    { label: 'BOTTOMS', page: 'shop', param: 'bottoms' },
    { label: 'ACCESSORIES', page: 'shop', param: 'accessories' },
    { label: 'SALE', page: 'shop', param: 'sale', isSale: true },
    { label: 'LOOKBOOK', page: 'lookbook' },
    { label: 'OUR STORY', page: 'about' }
  ];

  return (
    <div className="drawer-backdrop open mobile-menu-backdrop" onClick={onClose}>
      <div 
        ref={drawerRef}
        className="mobile-nav-drawer" 
        onClick={e => e.stopPropagation()}
      >
        {/* Mobile Menu Header */}
        <div className="mobile-drawer-header">
          <div className="brand-title-group" onClick={() => handleNav('home')}>
            <span className="brand-title" style={{ fontSize: '1.35rem' }}>BELGAUM</span>
            <span className="brand-tagline">WOMEN'S FASHION</span>
          </div>
          <button 
            className="mobile-close-btn" 
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu Items List (Scrollable) */}
        <div className="mobile-drawer-body">
          <nav className="mobile-nav-list" aria-label="Mobile Navigation">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                className={`mobile-nav-item ${item.isSale ? 'sale-item' : ''}`}
                onClick={() => handleNav(item.page, item.param)}
              >
                <div className="mobile-nav-label-wrap">
                  <span className="mobile-nav-text">{item.label}</span>
                  {item.badge && <span className="mobile-item-badge">{item.badge}</span>}
                </div>
                <ChevronRight size={18} className="mobile-nav-arrow" />
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Footer Actions */}
        <div className="mobile-drawer-footer">
          <button 
            className="mobile-search-btn" 
            onClick={() => { onClose(); setIsSearchOpen(true); }}
          >
            <Search size={18} />
            <span>SEARCH THE COLLECTION</span>
          </button>
          
          <div className="mobile-footer-action-row">
            <button 
              className="mobile-action-pill"
              onClick={() => { onClose(); setIsWishlistOpen(true); }}
            >
              <Heart size={16} />
              <span>WISHLIST ({wishlistCount})</span>
            </button>
            <button 
              className="mobile-action-pill primary"
              onClick={() => { onClose(); setIsCartOpen(true); }}
            >
              <ShoppingBag size={16} />
              <span>BAG ({totalItemsCount})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
