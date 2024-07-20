import React from 'react';
import Slider from 'react-slick';
import './ProductGrid.css';

const products = [
  { id: 1, name: 'Blue T-Shirt', price: '$29', image: 'path/to/image1.png', status: 'INSTOCK' },
  { id: 2, name: 'Bracelet', price: '$15', image: 'path/to/image2.png', status: 'INSTOCK' },
  { id: 3, name: 'Brown Purse', price: '$120', image: 'path/to/image3.png', status: 'OUTOFSTOCK' },
  // Add more products as needed
];

function ProductSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 10,
    arrows: true
  };

  return (
    <div className="product-slider">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className={`status ${product.status.toLowerCase()}`}>
              {product.status}
            </div>
            <div className="icons">
              <button className="icon-search">🔍</button>
              <button className="icon-star">⭐</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;


