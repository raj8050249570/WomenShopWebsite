import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function Toast() {
  const { toast, setToast } = useShop();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast, setToast]);

  if (!toast) return null;

  return (
    <div className="toast-container">
      {toast.type === 'error' ? (
        <AlertCircle size={18} color="#FF8A8A" />
      ) : (
        <CheckCircle2 size={18} color="#C5A880" />
      )}
      <span>{toast.message}</span>
    </div>
  );
}
