import React from 'react';
import { X, ShoppingBag, Trash2, Heart } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useShop } from '../../context/ShopContext';
import { products } from '../../data/products';

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { navigateTo, showToast } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  const handleMoveToBag = (product) => {
    addToCart(product, product.colors?.[0], product.sizes?.[0] || 'S');
    toggleWishlist(product.id);
    showToast(`Moved ${product.name} to your bag`);
  };

  return (
    <div className={`drawer-backdrop ${isWishlistOpen ? 'open' : ''}`} onClick={() => setIsWishlistOpen(false)}>
      <div className={`cart-drawer ${isWishlistOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Heart size={20} color="#c93b3b" fill="#c93b3b" />
            <h3 className="drawer-title">SAVED ITEMS ({wishlist.length})</h3>
          </div>
          <button 
            className="modal-close-btn" 
            style={{ position: 'static' }} 
            onClick={() => setIsWishlistOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-items-list">
          {wishlistProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--color-text-secondary)' }}>
              <Heart size={44} strokeWidth={1} style={{ margin: '0 auto 1rem', color: 'var(--color-text-muted)' }} />
              <p>You haven't saved any pieces to your wishlist yet.</p>
              <button 
                className="btn-primary" 
                style={{ marginTop: '1.5rem', width: '100%' }}
                onClick={() => {
                  setIsWishlistOpen(false);
                  navigateTo('shop', 'all');
                }}
              >
                <span>EXPLORE COLLECTION</span>
              </button>
            </div>
          ) : (
            wishlistProducts.map(product => (
              <div key={product.id} className="cart-item-row">
                <img src={product.images[0]} alt={product.name} className="cart-item-thumb" />
                <div>
                  <h4 
                    className="cart-item-name"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setIsWishlistOpen(false);
                      navigateTo('product', product.slug);
                    }}
                  >
                    {product.name}
                  </h4>
                  <div className="cart-item-price">${product.price.toFixed(2)}</div>
                  <button 
                    className="btn-link" 
                    style={{ fontSize: '0.72rem', marginTop: '0.4rem', color: 'var(--color-olive-dark)' }}
                    onClick={() => handleMoveToBag(product)}
                  >
                    + Move to Bag
                  </button>
                </div>

                <button 
                  onClick={() => toggleWishlist(product.id)}
                  style={{ color: 'var(--color-text-muted)', padding: '6px' }}
                  title="Remove"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
