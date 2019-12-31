import { createContext } from 'react';

// Sẽ đc dynamic cập nhật thông qua local state ở component header rồi pass xuống qua provider component của chính nó.
const CartContext = createContext({
  hidden: true,
  toggleCartHidden: () => {} // như 1 placeholder để lúc sau truyền 1 func vô
});

export default CartContext;
