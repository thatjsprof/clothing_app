import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const hidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

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
