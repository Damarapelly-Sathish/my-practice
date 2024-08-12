import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from './actiontype';

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
  });
  
  export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  });
  
  export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  });
  
  export const fetchProducts = () => {
    return (dispatch) => {
      dispatch(fetchProductsRequest());
      fetch('http://localhost:8080/api/products/getproduct')
        .then(response => response.json())
        .then(data => {
          dispatch(fetchProductsSuccess(data));
        })
        .catch(error => {
          dispatch(fetchProductsFailure(error.message));
        });
    };
  };

  export const fetchByFilter = (filter) => {
    return  (dispatch) => {
      dispatch(fetchProductsRequest());
      try {
        fetch(`http://localhost:8080/api/products/getproduct/filter?category=${filter}`)
        .then(response => response.json())
        .then(data => {
          dispatch(fetchProductsSuccess(data));
          console.log(data);
        })
      } catch (error) {
        dispatch(fetchProductsFailure(error.message));
      }
    };
  }
