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
