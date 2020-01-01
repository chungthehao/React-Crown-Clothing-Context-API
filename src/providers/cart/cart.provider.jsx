import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  getCartItemsCount
} from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  cartItems: [],
  cartItemsCount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
  toggleCartHidden: () => {}
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems]);

  const toggleCartHidden = () => setHidden(!hidden);
  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const clearItem = item => setCartItems(clearItemFromCart(cartItems, item));

  return (
    <CartContext.Provider
      value={{
        hidden,
        cartItems,
        cartItemsCount,
        toggleCartHidden,
        addItem,
        removeItem,
        clearItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
