import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ShopProvider, useShop } from './context/ShopContext';

// Layout Components
import AnnouncementBar from './components/layout/AnnouncementBar';
import Header from './components/layout/Header';
import MobileMenu from './components/layout/MobileMenu';
import Footer from './components/layout/Footer';

// Modals & Drawers
import CartDrawer from './components/cart/CartDrawer';
import WishlistDrawer from './components/wishlist/WishlistDrawer';
import SearchModal from './components/search/SearchModal';
import QuickViewModal from './components/common/QuickViewModal';
import Toast from './components/common/Toast';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LookbookPage from './pages/LookbookPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function MainLayout() {
  const { currentPage } = useShop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product':
        return <ProductDetailsPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'lookbook':
        return <LookbookPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-root">
      <AnnouncementBar />
      <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      
      {renderActivePage()}
      
      <Footer />

      {/* Interactive Drawers & Overlays */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <QuickViewModal />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <ShopProvider>
          <MainLayout />
        </ShopProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
