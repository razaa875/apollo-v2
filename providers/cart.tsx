'use client';

import { IProductByCategory } from '@/common/models/interface';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';


export interface ICartItem extends IProductByCategory {
  quantity: number;
}

interface CartContextType {
  cart: Record<number, ICartItem>; // key = product.id
  addItem: (item: IProductByCategory, showToast?: boolean) => void;
  updateItem: (item: ICartItem) => void;
  removeItem: (id: number) => void;
  resetCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartKey = 'apollo_cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Record<string, ICartItem>>({});

  useEffect(() => {
    const data = localStorage.getItem(cartKey);
    if (data) {
      try {
        setCart(JSON.parse(data));
      } catch {
        localStorage.removeItem(cartKey);
      }
    }
  }, []);

  const saveCart = (data: Record<string, ICartItem>) => {
    setCart(data);
    localStorage.setItem(cartKey, (JSON.stringify(data)));
  };

const addItem = (item: IProductByCategory, showToast: boolean = true) => {
    const existingItem = cart[item.id];
    const updatedCart = {
      ...cart,
      [item.id]: existingItem
        ? { ...existingItem, quantity: existingItem.quantity + 1 }
        : { ...item, quantity: 1 },
    };

    saveCart(updatedCart);
    if (showToast) toast.success(existingItem ? 'Quantity updated' : 'Item added to cart');
  };

  const updateItem = (item: ICartItem) => {
    const updatedCart = { ...cart, [item.id]: item };
    saveCart(updatedCart);
  };

  const removeItem = (id: string | number) => {
    const updatedCart = { ...cart };
    delete updatedCart[id];
    saveCart(updatedCart);
  };

  const resetCart = () => {
    saveCart({});
  };

  return <CartContext.Provider value={{ cart, addItem, updateItem, removeItem, resetCart }}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
