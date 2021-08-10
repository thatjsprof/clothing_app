import SHOP_ACTION_TYPES from "./shop.type";

const INITIAL_STATE = {
  ShopData: null,
  isFetching: true,
  errorMessage: undefined,
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START:
      return {
        ...state,
        ShopData: action.payload,
        isFetching: true,
      };
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        ShopData: action.payload,
        isFetching: false,
      };
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default ShopReducer;
