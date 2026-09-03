import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'shop' | 'product' | 'cart' | 'checkout' | 'lookbook' | 'about' | 'contact'
  const [currentProductSlug, setCurrentProductSlug] = useState('linen-blend-blazer');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);

  // Sync with browser hash / navigation
  const navigateTo = (page, param = null) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'product' && param) {
      setCurrentProductSlug(param);
    }
    if (page === 'shop' && param) {
      setActiveCategory(param);
    }
    setCurrentPage(page);
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
  };

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const currentProduct = products.find(p => p.slug === currentProductSlug) || products[0];

  return (
    <ShopContext.Provider value={{
      currentPage,
      navigateTo,
      currentProduct,
      currentProductSlug,
      setCurrentProductSlug,
      activeCategory,
      setActiveCategory,
      searchQuery,
      setSearchQuery,
      isSearchOpen,
      setIsSearchOpen,
      quickViewProduct,
      openQuickView,
      closeQuickView,
      toast,
      setToast,
      showToast
    }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
