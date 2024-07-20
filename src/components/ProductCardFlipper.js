import React, { useState } from 'react';
import './ProductCardFlipper.css';

const products = [
  { id: 1, name: 'Blue T-Shirt', price: '$29', image: 'path/to/image1.png', description: 'This is a blue t-shirt.' },
  { id: 2, name: 'Bracelet', price: '$15', image: 'path/to/image2.png', description: 'This is a bracelet.' },
  { id: 3, name: 'Brown Purse', price: '$120', image: 'path/to/image3.png', description: 'This is a brown purse.' },
  // Add more products as needed
];

function ProductCardFlipper() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const currentProduct = products[currentProductIndex];

  return (
    <div className="product-card-flipper">
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-front">
          <img src={currentProduct.image} alt={currentProduct.name} />
          <h3>{currentProduct.name}</h3>
          <p>{currentProduct.price}</p>
        </div>
        <div className="card-back">
          <h3>{currentProduct.name}</h3>
          <p>{currentProduct.description}</p>
        </div>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default ProductCardFlipper;
