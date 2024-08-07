import React, { useState,useEffect} from 'react';
import './ProductGrid.css';
import { BrowserRouter as Router, Routes, Route, Link,useLocation ,useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { findAllByTestId } from '@testing-library/react';
//import PaymentPage from './PaymentPage';
import {fetchProducts} from './action';

const ProductGrid = () => {
  const dispatch = useDispatch();
  const { loading, products, error }=useSelector(state => state);
  
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
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            <span className="discounted-price">${product.discountedPrice.toFixed(2)}</span>
          </div> */}
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}

    </div> : <>{error}</>
    }
    </>
  );
};



export default ProductGrid;


