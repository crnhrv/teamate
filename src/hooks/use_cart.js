import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [checkingOut, setCheckingOut] = useState(false);

  const addToCart = (newItem, amount) => {
    const oldItem = getItem(newItem.id);
    if (oldItem) {
      changeItemCount(oldItem, amount);
    } else {
      setCartItems((oldCart) => [...oldCart, { ...newItem, count: 1 }]);
    }
    return;
  };

  const removeFromCart = (item, amount) => {
    const oldItem = getItem(item.id);
    if (oldItem.count - amount > 0) {
      changeItemCount(oldItem, -amount);
    } else {
      const items = cartItems.filter((item) => item.id !== oldItem.id);
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

  const checkOut = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCartItems([]);
      setCheckingOut(false);
    }, 1000);
  };

  return { cartItems, removeFromCart, addToCart, checkingOut, checkOut };
};
