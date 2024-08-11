import {
    FETCH_Cart_PRODUCTS_REQUEST,
    FETCH_Cart_PRODUCTS_SUCCESS,
    FETCH_Cart_PRODUCTS_FAILURE
  } from './actiontype';

  export const fetchCartProductsRequest = () => ({
    type: FETCH_Cart_PRODUCTS_REQUEST
  });
  
  export const fetchCartProductsSuccess = (products) => ({
    type: FETCH_Cart_PRODUCTS_SUCCESS,
    payload: products
  });
  
  const fetchCartProductsFailure = (error) => ({
    type: FETCH_Cart_PRODUCTS_FAILURE,
    payload: error
  });

   const FetchCartData = (props) => {
    return (dispatch) => {
      dispatch(fetchCartProductsRequest());
      fetch('http://localhost:8080/cart/1235466/add',{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(props)
      }) 
        .then(response => response.json())
        .then(data => {
          dispatch(fetchCartProductsSuccess(data));
        })
        .catch(error => {
          dispatch(fetchCartProductsFailure(error.message));
        });
    };
  };

  export default FetchCartData;