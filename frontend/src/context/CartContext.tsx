"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  message: string;
  showMessage: (text: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [message, setMessage] = useState<string>("");

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const showMessage = (text: string) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000); // Reset message after 3 seconds
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    showMessage("Product added to cart! ✅"); // Mostrar mensaje de confirmación
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, quantity) } : p
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, message, showMessage }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
