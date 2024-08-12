import { createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducer';
import cartReducer from './reduxcart'


export const rootReducer = combineReducers({
  product: productReducer,
  cartItems: cartReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);