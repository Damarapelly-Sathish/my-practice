import React, {useEffect} from 'react';
import './ProductGrid.css';
import { Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import PaymentPage from './PaymentPage';
import {fetchProducts} from './action';

const ProductGrid = ({setCartItems}) => {
  const dispatch = useDispatch();
  const { loading, products, error }=useSelector(state => state);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(item => item.name === product.name);
      if (existingItem) {
        return prevCartItems.map(item =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return ( 
  <>
    {
    loading ?
    <div className="grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <Link to={`/product/${index}`}>{<img className="product-image" src={product.image} alt={product.name} />}</Link>
          <div className="discount">-{product.discount}</div>
          <h3 className="product-name">{product.name}</h3>
          {/* <div className="rating">
            {'★'.repeat(product.rating)}{'☆'.repeat(1000 - product.rating)}
            <span className="reviews">({product.reviews} reviews)</span>
          </div> */}
          {/* <div className="price">
            <span className="original-price">${product. .toFixed(2)}</span>
            <span className="discounted-price">${product.discountedPrice.toFixed(2)}</span>
          </div> */}
          <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

    </div> : <>{error}</>
    }
    </>
  );
};



export default ProductGrid;


