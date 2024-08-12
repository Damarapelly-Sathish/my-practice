import React from 'react';

function RecommendedProducts({ products }) {
  return (
    <div className="recommended-products">
      <h3>You Might Also Like</h3>
      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedProducts;