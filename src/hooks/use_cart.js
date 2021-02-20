import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    const oldItem = getItem(newItem.id);
    if (oldItem) {
      changeItemCount(oldItem);
    } else {
      setCartItems((oldCart) => [...oldCart, { ...newItem, count: 1 }]);
    }
    return;
  };

  const removeFromCart = (id) => {
    const oldItem = getItem(id);
    if (oldItem.count > 1) {
      changeItemCount(oldItem, -1);
    } else {
      const items = cartItems.filter((item) => item.id !== id);
      setCartItems(items);
    }
  };

  const getItem = (id) => {
    return cartItems.find((item) => id === item.id);
  };

  const changeItemCount = (item, increment = 1) => {
    const tempNew = { ...item, count: item.count + increment };
    const otherItems = cartItems.filter(
      (otherItem) => otherItem.id !== item.id
    );
    setCartItems([...otherItems, tempNew]);
  };

  return { cartItems, removeFromCart, addToCart };
};
