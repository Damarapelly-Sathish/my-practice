import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducer';
import cartReducer from './reduxcart'

export const store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const cartstore = createStore(
  cartReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
