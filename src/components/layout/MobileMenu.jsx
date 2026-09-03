import React from 'react';
import { X, ChevronRight, Heart, ShoppingBag, Search, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function MobileMenu({ isOpen, onClose }) {
  const { navigateTo, setIsSearchOpen } = useShop();
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();

  if (!isOpen) return null;

  const handleNav = (page, param) => {
    navigateTo(page, param);
    onClose();
  };

  return (
    <div className="drawer-backdrop open" onClick={onClose} style={{ zIndex: 350 }}>
      <div 
        className="cart-drawer open" 
        style={{ maxWidth: '340px', left: 0, right: 'auto' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="drawer-header">
          <div className="brand-title-group">
            <span className="brand-title" style={{ fontSize: '1.25rem' }}>BELGAUM</span>
            <span className="brand-tagline">WOMEN'S FASHION</span>
          </div>
          <button className="modal-close-btn" style={{ position: 'static' }} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-items-list" style={{ padding: '1.5rem 1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button 
              className="dropdown-item" 
              style={{ fontSize: '0.9rem', padding: '0.85rem 1rem' }}
              onClick={() => handleNav('shop', 'all')}
            >
              <span>NEW IN</span>
              <ChevronRight size={16} />
            </button>
            <button 
              className="dropdown-item" 
              style={{ fontSize: '0.9rem', padding: '0.85rem 1rem' }}
              onClick={() => handleNav('shop', 'dresses')}
            >
              <span>DRESSES</span>
              <ChevronRight size={16} />
            </button>
            <button 
              className="dropdown-item" 
              style={{ fontSize: '0.9rem', padding: '0.85rem 1rem' }}
              onClick={() => handleNav('shop', 'tops')}
            >
              <span>TOPS</span>
              <ChevronRight size={16} />
            </button>
            <button 
              className="dropdown-item" 
              style={{ fontSize: '0.9rem', padding: '0.85rem 1rem' }}
              onClick={() => handleNav('shop', 'bottoms')}
            >
              <span>BOTTOMS</span>
              <ChevronRight size={16} />
            </button>
            <button 
              className="dropdown-item" 
              style={{ fontSize: '0.9rem', padding: '0.85rem 1rem' }}
              onClick={() => handleNav('shop', 'accessories')}
            >
              <span>ACCESSORIES</span>
              <ChevronRight size={16} />
            </button>
            <button 
              className="dropdown-item" 
              style={{ fontSize: '0.9rem', padding: '0.85rem 1rem', color: '#a43e3e' }}
              onClick={() => handleNav('shop', 'sale')}
            >
              <span>SALE</span>
              <ChevronRight size={16} />
            </button>
            <button 
              className="dropdown-item" 
              style={{ fontSize: '0.9rem', padding: '0.85rem 1rem' }}
              onClick={() => handleNav('lookbook')}
            >
              <span>LOOKBOOK</span>
              <ChevronRight size={16} />
            </button>
            <button 
              className="dropdown-item" 
              style={{ fontSize: '0.9rem', padding: '0.85rem 1rem' }}
              onClick={() => handleNav('about')}
            >
              <span>OUR STORY</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="drawer-footer" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button 
            className="btn-secondary" 
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => { onClose(); setIsSearchOpen(true); }}
          >
            <Search size={16} /> Search Store
          </button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              className="btn-secondary" 
              style={{ flex: 1, padding: '0.75rem 0.5rem', fontSize: '0.72rem' }}
              onClick={() => { onClose(); setIsWishlistOpen(true); }}
            >
              <Heart size={14} /> Wishlist ({wishlistCount})
            </button>
            <button 
              className="btn-primary" 
              style={{ flex: 1, padding: '0.75rem 0.5rem', fontSize: '0.72rem' }}
              onClick={() => { onClose(); setIsCartOpen(true); }}
            >
              <ShoppingBag size={14} /> Bag ({totalItemsCount})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
