import {
    FETCH_Cart_PRODUCTS_REQUEST,
    FETCH_Cart_PRODUCTS_SUCCESS,
    FETCH_Cart_PRODUCTS_FAILURE
  } from './actiontype';
  
  const cartState = {
    loading: false,
    products: [],
    error: ''
  };
  
  const cartReducer = (state = cartState, action) => {
    switch (action.type) {
      case FETCH_Cart_PRODUCTS_REQUEST:
        return {
          ...cartState,
          loading: true
        };
      case FETCH_Cart_PRODUCTS_SUCCESS:
        return {
          loading: true,
          products: action.payload,
          error: ''
        };
      case FETCH_Cart_PRODUCTS_FAILURE:
        return {
          loading: false,
          products: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;