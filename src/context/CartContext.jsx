import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('belgaum_cart');
      return saved ? JSON.parse(saved) : [
        // Seed an initial demo item for realistic feel
        {
          id: 'p1',
          slug: 'linen-blend-blazer',
          name: 'Linen Blend Blazer',
          price: 89.00,
          quantity: 1,
          selectedColor: { name: 'Oatmeal Beige', hex: '#D6C8B4' },
          selectedSize: 'S',
          image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80'
        }
      ];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountPercent, setDiscountPercent] = useState(0);

  useEffect(() => {
    localStorage.setItem('belgaum_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, selectedColor, selectedSize, quantity = 1) => {
    setCart(prev => {
      const colorObj = selectedColor || product.colors?.[0] || { name: 'Standard', hex: '#000' };
      const sizeStr = selectedSize || product.sizes?.[0] || 'Standard';
      
      const existingIndex = prev.findIndex(item => 
        item.id === product.id && 
        item.selectedColor?.name === colorObj.name && 
        item.selectedSize === sizeStr
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          quantity,
          selectedColor: colorObj,
          selectedSize: sizeStr,
          image: colorObj.image || product.images?.[0]
        }
      ];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, delta) => {
    setCart(prev => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const applyCoupon = (code) => {
    if (code.trim().toUpperCase() === 'BELGAUM10' || code.trim().toUpperCase() === 'WELCOME10') {
      setAppliedCoupon(code.toUpperCase());
      setDiscountPercent(10);
      return { success: true, message: '10% luxury discount applied!' };
    }
    return { success: false, message: 'Invalid coupon code. Try WELCOME10' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscountPercent(0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingThreshold = 99.00;
  const shippingCost = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 15.00;
  const total = subtotal - discountAmount + (subtotal > 0 ? shippingCost : 0);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      subtotal,
      shippingCost,
      shippingThreshold,
      discountAmount,
      discountPercent,
      appliedCoupon,
      applyCoupon,
      removeCoupon,
      total,
      totalItemsCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
