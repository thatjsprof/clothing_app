import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const hidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((accumulator, currentValue) => {
      const { price, quantity } = currentValue;
      return accumulator + price * quantity;
    }, 0);
  }
);
