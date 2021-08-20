import types from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case types.SIGN_UP_FAILURE:
    case types.SIGN_OUT_FAILURE:
    case types.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
