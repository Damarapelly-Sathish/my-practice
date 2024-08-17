import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE
} from '../actiontype';

export const createOrderRequest = () => ({
  type: CREATE_ORDER_REQUEST
});

export const createOrderSuccess = (order) => ({
  type: CREATE_ORDER_SUCCESS,
  payload: order
});

export const createOrderFailure = (error) => ({
  type: CREATE_ORDER_FAILURE,
  payload: error
});

export const createOrder = (amount) => {
  return async (dispatch) => {
    dispatch(createOrderRequest());
    try {
      const response = await fetch('http://localhost:8080/api/payment/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      dispatch(createOrderSuccess(data));
    } catch (error) {
      dispatch(createOrderFailure(error.message));
    }
  };
};
