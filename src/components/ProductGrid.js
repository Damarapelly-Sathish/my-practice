import React from 'react';
import './ProductGrid.css';
import { BrowserRouter as Router, Routes, Route, Link,useLocation ,useParams} from 'react-router-dom';
//import PaymentPage from './PaymentPage';


const ProductGrid = () => {
  const products = [
    {
      id:1,
      image: './image1.png',
      discount: '25%',
      name: 'Product Name',
      rating: 5,
      reviews: 12,
      originalPrice: 321.00,
      discountedPrice: 150.00
    },
    {
      image: './image2.png',
      discount: '25%',
      name: 'Product Name',
      rating: 4,
      reviews: 15,
      originalPrice: 80.00,
      discountedPrice: 49.00
    },
    {
      image: './image3.png',
      discount: '25%',
      name: 'Product Name',
      rating: 3,
      reviews: 21,
      originalPrice: 124.00,
      discountedPrice: 82.00
    },
    {
      image: './image4.png',
      discount: '25%',
      name: 'Product Name',
      rating: 5,
      reviews: 22,
      originalPrice: 250.00,
      discountedPrice: 120.00
    },
    {
      image: './image4.png',
      discount: '25%',
      name: 'Product Name',
      rating: 5,
      reviews: 22,
      originalPrice: 250.00,
      discountedPrice: 120.00
    },
    {
      image: './image4.png',
      discount: '25%',
      name: 'Product Name',
      rating: 5,
      reviews: 22,
      originalPrice: 250.00,
      discountedPrice: 120.00
    },
    
  ];

  return (
    <div className="grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <Link to={`/product/${index}`}>{<img className="product-image" src={product.image} alt={product.name} />}</Link>
          <div className="discount">-{product.discount}</div>
          <h3 className="product-name">{product.name}</h3>
          <div className="rating">
            {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
            <span className="reviews">({product.reviews} reviews)</span>
          </div>
          <div className="price">
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            <span className="discounted-price">${product.discountedPrice.toFixed(2)}</span>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}

    </div>
  );
};



export default ProductGrid;


