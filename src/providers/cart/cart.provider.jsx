import React, { createContext, useState } from 'react';

import { addItemToCart } from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  cartItems: [],
  addItem: () => {},
  toggleCartHidden: () => {}
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const toggleCartHidden = () => setHidden(!hidden);
  const addItem = item => setCartItems(addItemToCart(cartItems, item));

  return (
    <CartContext.Provider
      value={{
        hidden,
        cartItems,
        toggleCartHidden,
        addItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
