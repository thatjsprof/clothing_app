import types from "./cart.types";

export const toggleHidden = () => ({
  type: types.toggle,
});

export const addItemToCart = (item) => ({
  type: types.addToCart,
  payload: item,
});

export const clearCartItem = (id) => ({
  type: types.clearCartItem,
  payload: id,
});

export const removeFromCart = (id) => ({
  type: types.removeFromCart,
  payload: id,
});
