import types from "./cart.types";
import { addItemToCart, removeFromCart, removeCartItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.toggle:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case types.addToCart:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case types.removeFromCart:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload),
      };
    case types.clearCartItem:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };
    case types.clearCart:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
