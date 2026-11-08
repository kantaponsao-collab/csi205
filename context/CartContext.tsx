"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ProductItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type CartContextType = {
  products: ProductItem[];
  cartItems: ProductItem[];
  addToCart: (product: ProductItem) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
  products: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    // Fetch from DummyJSON API
    fetch("https://dummyjson.com/products?limit=111")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.products) {
          const mapped: ProductItem[] = data.products.map((p: any) => ({
            id: p.id,
            title: p.title || p.description,
            price: p.price,
            thumbnail: p.thumbnail || p.images?.[0] || "",
          }));
          setProducts(mapped);
          // Initial cart items (take 12 items to match exact image sample)
          setCartItems(mapped.slice(0, 12));
        }
      })
      .catch(() => {
        // Fallback dummy products if network fails
        const fallback = Array.from({ length: 111 }, (_, i) => ({
          id: i + 1,
          title: `Product ${i + 1}`,
          price: parseFloat((Math.random() * 90 + 5).toFixed(2)),
          thumbnail: `https://picsum.photos/seed/${i + 1}/300/200`,
        }));
        setProducts(fallback);
        setCartItems(fallback.slice(0, 12));
      });
  }, []);

  const addToCart = (product: ProductItem) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((item) => item.id === id);
      if (idx !== -1) {
        const next = [...prev];
        next.splice(idx, 1);
        return next;
      }
      return prev;
    });
  };

  return (
    <CartContext.Provider
      value={{ products, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
