import SHOP_ACTION_TYPES from "./shop.type";

const INITIAL_STATE = {
  ShopData: null,
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTION_TYPES.UPDATE_COLLECTIONS:
      return {
        ...state,
        ShopData: action.payload,
      };
    default:
      return state;
  }
};

export default ShopReducer;
