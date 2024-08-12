import {
    FETCH_Cart_PRODUCTS_REQUEST,
    FETCH_Cart_PRODUCTS_SUCCESS,
    FETCH_Cart_PRODUCTS_FAILURE
  } from './actiontype';
  
  const cartState = {
    loading: false,
    cart: [],
    error: ''
  };
  
  const cartReducer = (state1= cartState, action) => {
    console.log(action.type)
    switch (action.type) {
      case FETCH_Cart_PRODUCTS_REQUEST:
        return {
          ...state1,
          loading: true
        };
      case FETCH_Cart_PRODUCTS_SUCCESS:
        return {
          loading: true,
          cart:action.payload,
        };
      case FETCH_Cart_PRODUCTS_FAILURE:
        return {
          loading: false,
          products: [],
          error: action.payload
        };
      default:
        return state1;
    }
  };
  
  export default cartReducer;