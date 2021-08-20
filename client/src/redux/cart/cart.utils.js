export const addItemToCart = (existingCart, item) => {
  const index = existingCart.findIndex((cartItem) => item.id === cartItem.id);
  if (index >= 0) {
    return existingCart.map((cartItem) => {
      return item.id === cartItem.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem;
    });
  }
  return [...existingCart, { ...item, quantity: 1 }];
};

export const removeCartItem = (existingCart, id) => {
  return existingCart.filter((cartItem) => {
    return cartItem.id !== id;
  });
};

export const removeFromCart = (existingCart, item) => {
  const cartItem = existingCart.find((cartItem) => {
    return cartItem.id === item.id;
  });

  if (cartItem.quantity === 1) {
    return existingCart.filter((cartItem) => cartItem.id !== item.id);
  } else {
    return existingCart.map((cartItem) => {
      return cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
};
