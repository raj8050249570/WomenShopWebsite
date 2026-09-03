import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, ChevronDown, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useShop } from '../../context/ShopContext';

export default function Header({ onOpenMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();
  const { currentPage, navigateTo, setIsSearchOpen } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Identity */}
        <div className="brand-logo" onClick={() => navigateTo('home')}>
          <div className="brand-icon-wrapper">
            <svg viewBox="0 0 40 40" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M20 4 C14 12, 10 18, 10 26 C10 32, 14 36, 20 36 C26 36, 30 32, 30 26 C30 18, 26 12, 20 4 Z" />
              <path d="M20 12 L20 28 M14 20 L26 20" strokeLinecap="round" opacity="0.6" />
            </svg>
          </div>
          <div className="brand-title-group">
            <span className="brand-title">BELGAUM</span>
            <span className="brand-tagline">WOMEN'S FASHION</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <button 
            className={`nav-link ${currentPage === 'shop' ? 'active' : ''}`}
            onClick={() => navigateTo('shop', 'all')}
          >
            NEW IN
          </button>

          {/* Clothing with Dropdown */}
          <div className="nav-item-dropdown">
            <button 
              className="nav-link"
              onClick={() => navigateTo('shop', 'clothing')}
            >
              CLOTHING <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => navigateTo('shop', 'all')}>All Clothing</div>
              <div className="dropdown-item" onClick={() => navigateTo('shop', 'dresses')}>Dresses & Gowns</div>
              <div className="dropdown-item" onClick={() => navigateTo('shop', 'tops')}>Blazers & Tops</div>
              <div className="dropdown-item" onClick={() => navigateTo('shop', 'bottoms')}>Tailored Trousers</div>
              <div className="dropdown-item" onClick={() => navigateTo('shop', 'co-ords')}>Co-ord Sets</div>
            </div>
          </div>

          <button 
            className="nav-link"
            onClick={() => navigateTo('shop', 'dresses')}
          >
            DRESSES
          </button>

          <button 
            className="nav-link"
            onClick={() => navigateTo('shop', 'tops')}
          >
            TOPS
          </button>

          <button 
            className="nav-link"
            onClick={() => navigateTo('shop', 'bottoms')}
          >
            BOTTOMS
          </button>

          <button 
            className="nav-link"
            onClick={() => navigateTo('shop', 'accessories')}
          >
            ACCESSORIES
          </button>

          <button 
            className="nav-link sale"
            onClick={() => navigateTo('shop', 'sale')}
          >
            SALE
          </button>

          <button 
            className={`nav-link ${currentPage === 'lookbook' ? 'active' : ''}`}
            onClick={() => navigateTo('lookbook')}
          >
            LOOKBOOK
          </button>
        </nav>

        {/* Action Icons */}
        <div className="header-actions">
          <button 
            className="icon-btn" 
            title="Search" 
            aria-label="Search collection"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={20} strokeWidth={1.7} />
          </button>

          <button 
            className="icon-btn" 
            title="Account" 
            aria-label="Account login"
            onClick={() => navigateTo('about')}
          >
            <User size={20} strokeWidth={1.7} />
          </button>

          <button 
            className="icon-btn" 
            title="Wishlist" 
            aria-label="Saved items"
            onClick={() => setIsWishlistOpen(true)}
          >
            <Heart size={20} strokeWidth={1.7} />
            {wishlistCount > 0 && <span className="icon-badge">{wishlistCount}</span>}
          </button>

          <button 
            className="icon-btn" 
            title="Shopping Bag" 
            aria-label="Shopping bag"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} strokeWidth={1.7} />
            {totalItemsCount > 0 && <span className="icon-badge">{totalItemsCount}</span>}
          </button>

          {/* Mobile menu trigger */}
          <button 
            className="icon-btn mobile-toggle" 
            aria-label="Open navigation menu"
            onClick={onOpenMobileMenu}
          >
            <Menu size={24} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}
