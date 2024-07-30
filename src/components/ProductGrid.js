import React, { useState,useEffect} from 'react';
import './ProductGrid.css';
import { BrowserRouter as Router, Routes, Route, Link,useLocation ,useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { findAllByTestId } from '@testing-library/react';
//import PaymentPage from './PaymentPage';
import fetchProductsRequest from './action';

const ProductGrid = () => {
  const [products,setProducts]=useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    setProducts(()=>[{
      products:dispatch(fetchProductsRequest())
    }]

    );
  }, [dispatch]);
  // useEffect(() => {
  //   // Function to fetch products from the backend
  //   const fetchProducts = async () => {
  //     try {
  //       // Make an API call to get the products
  //       const response = await fetch('http://localhost:8080/api/products/getproduct');
  //       // Check if the response is ok (status code 200-299)
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       // Parse the response JSON
  //       const data = await response.json();
  //       // Update the products state with the fetched data
  //       setProducts(data);
  //     } catch (error) {
  //       // Set the error state if there's an error
  //       // setError(error.message);
  //       setLoading(false);
  //       console.log("error catch")
  //     }
  //   };

  //   // Call the fetchProducts function
  //   fetchProducts();
  // }, []);

  // const products = [
  //   {
  //     id:1,
  //     image: './image1.png',
  //     discount: '25%',
  //     name: 'Product Name',
  //     rating: 5,
  //     reviews: 12,
  //     originalPrice: 321.00,
  //     discountedPrice: 150.00
  //   },
  //   {
  //     image: './image2.png',
  //     discount: '25%',
  //     name: 'Product Name',
  //     rating: 4,
  //     reviews: 15,
  //     originalPrice: 80.00,
  //     discountedPrice: 49.00
  //   },
  //   {
  //     image: './image3.png',
  //     discount: '25%',
  //     name: 'Product Name',
  //     rating: 3,
  //     reviews: 21,
  //     originalPrice: 124.00,
  //     discountedPrice: 82.00
  //   },
  //   {
  //     image: './image4.png',
  //     discount: '25%',
  //     name: 'Product Name',
  //     rating: 5,
  //     reviews: 22,
  //     originalPrice: 250.00,
  //     discountedPrice: 120.00
  //   },
  //   {
  //     image: './image4.png',
  //     discount: '25%',
  //     name: 'Product Name',
  //     rating: 5,
  //     reviews: 22,
  //     originalPrice: 250.00,
  //     discountedPrice: 120.00
  //   },
  //   {
  //     image: './image4.png',
  //     discount: '25%',
  //     name: 'Product Name',
  //     rating: 5,
  //     reviews: 22,
  //     originalPrice: 250.00,
  //     discountedPrice: 120.00
  //   },
    
  // ];
  return ( 
  <>
  {console.log(products)}
    {products.loading?
    <div className="grid">
      {products.products.map((product, index) => (
        <div className="product-card" key={index}>
          <Link to={`/product/${index}`}>{<img className="product-image" src={product.image} alt={product.name} />}</Link>
          <div className="discount">-{product.discount}</div>
          <h3 className="product-name">{product.name}</h3>
          <div className="rating">
            {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
            <span className="reviews">({product.reviews} reviews)</span>
          </div>
          {/* <div className="price">
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            <span className="discounted-price">${product.discountedPrice.toFixed(2)}</span>
          </div> */}
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}

    </div>:""}
    </>
  );
};



export default ProductGrid;


