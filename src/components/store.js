import { createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducer';
import cartReducer from './reduxcart'
import paymentReducer from './paymentComponent/paymentReducer';


export const rootReducer = combineReducers({
  product: productReducer,
  payment: paymentReducer,
  cartItems: cartReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);