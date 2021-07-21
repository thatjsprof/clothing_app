import types from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
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
            cartItems: [...state.cartItems, action.payload]
        }
    default:
      return state;
  }
};

export default cartReducer;
