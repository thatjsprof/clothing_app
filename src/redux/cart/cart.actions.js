import types from "./cart.types";

export const toggleHidden = () => ({
  type: types.toggle,
});

export const addItemToCart = (item) => ({
    type: types.addToCart,
    payload: item
})
