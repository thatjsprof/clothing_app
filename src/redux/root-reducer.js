import { combineReducers } from "redux";
import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import UserReducer from "./user/user.reducer";
import CartReducer from './cart/cart.reducer'
import DirectoryReducer from './directory/directory.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer
  });

export default persistReducer(persistConfig, rootReducer)
