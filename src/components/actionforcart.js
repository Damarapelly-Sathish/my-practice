import {
    FETCH_Cart_PRODUCTS_REQUEST,
    FETCH_Cart_PRODUCTS_SUCCESS,
    FETCH_Cart_PRODUCTS_FAILURE
  } from './actiontype';

  import {store} from './store';

  export const fetchCartProductsRequest = () => ({
    type: FETCH_Cart_PRODUCTS_REQUEST,
  });
  
  export const fetchCartProductsSuccess = (products) => ({
    type: FETCH_Cart_PRODUCTS_SUCCESS,
    payload: products,
  });
  
  const fetchCartProductsFailure = (error) => ({
    type: FETCH_Cart_PRODUCTS_FAILURE,
    payload: error
  });

   export const PostCartData = (props) => {
    return (dispatch) => {
      fetch('http://localhost:8080/cart/33023723/add',{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(props)
      }) 
    };
  };


  export const FetchCartData = () => {
    return (dispatch) => {
      dispatch(fetchCartProductsRequest());
      fetch('http://localhost:8080/cart/33023723')
        .then(response => response.json())
        .then(data => {
          store.dispatch(fetchCartProductsSuccess(data.items));
        })
        .catch(error => {
          dispatch(fetchCartProductsFailure(error.message));
        });
    };
  };