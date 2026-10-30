import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  // CART
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("medihub-cart")) || [];
    } catch {
      return [];
    }
  });

  // WISHLIST
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("medihub-wishlist")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("medihub-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("medihub-wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // CART FUNCTIONS
  const addToCart = (product) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id);

      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  // WISHLIST FUNCTIONS
  const addToWishlist = (product) => {
    setWishlistItems((items) => {
      const alreadyExists = items.some((item) => item.id === product.id);

      if (alreadyExists) return items;

      return [...items, product];
    });
  };
  const clearWishlist = () => setWishlistItems([]);

  const removeFromWishlist = (id) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleWishlist = (product) => {
    setWishlistItems((items) => {
      const alreadyExists = items.some((item) => item.id === product.id);

      if (alreadyExists) {
        return items.filter((item) => item.id !== product.id);
      }

      return [...items, product];
    });
  };

  // COUNTS AND TOTALS
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlistItems.length;

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,

        wishlistItems,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}