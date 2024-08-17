import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE
  } from '../actiontype';
  
  const initialState = {
    loading: false,
    order: {},
    error: ''
  };
  
  const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ORDER_REQUEST:
        return {
          ...state,
          loading: true
        };
      case CREATE_ORDER_SUCCESS:
        return {
          loading: false,
          order: action.payload,
          error: ''
        };
      case CREATE_ORDER_FAILURE:
        return {
          loading: false,
          order: {},
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default paymentReducer;
  