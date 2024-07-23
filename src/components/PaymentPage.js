import React from 'react';
//import { useSelector } from 'react-redux';
import './PaymentPage.css'
const PaymentPage = props => {
  const products = [
    {
      image: './image2.png',
      discount: '25%',
      name: 'Product Name',
      rating: 4,
      reviews: 15,
      originalPrice: 80.00,
      discountedPrice: 49.00
    },,
    // Add more products as needed
  ];
  return (
    <div className="payment-page">
      <h1>Checkout</h1>
      <div className="checkout-container">
      <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-items">
            {products.map((product) => (
              <div key={product.id} className="order-item">
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>Price: ${product.discountedPrice.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-total">
            <h3>Order Total:</h3>
            <p>${
              products.reduce((total, product) => total + product.discountedPrice, 0).toFixed(2)
            }</p>
          </div>
        </div>
        <div className="delivery-address">
          <h2>Delivery address</h2>
          <p>Satish</p>
          <p>11-98/1</p>
          <p>sri Durga medical store, nagunoor</p>
          <p>KARIMNAGAR, TELANGANA 505415</p>
          <a href="#">Add delivery instructions</a>
        </div>
        <div className="payment-method">
          <h2>Select a payment method</h2>
          <form>
            <div className="payment-option">
              <input type="radio" id="creditCard" name="paymentMethod" />
              <label htmlFor="creditCard">
                <strong>SBI Credit Card</strong> ending in 6324 (EMI available)
              </label>
            </div>
            <div className="available-balance">
              <label>Your available balance</label>
              <input type="text" placeholder="Enter Code" />
              <button type="button">Apply</button>
            </div>
            <div className="payment-option">
              <input type="radio" id="otherCard" name="paymentMethod" />
              <label htmlFor="otherCard">
                Credit or debit card
                <div>
                  <img src="visa.png" alt="Visa" />
                  <img src="mastercard.png" alt="MasterCard" />
                  <img src="amex.png" alt="American Express" />
                  <img src="maestro.png" alt="Maestro" />
                  <img src="rupay.png" alt="RuPay" />
                </div>
              </label>
              <input type="text" placeholder="Enter card details" />
            </div>
            <div className="payment-option">
              <input type="radio" id="netBanking" name="paymentMethod" />
              <label htmlFor="netBanking">Net Banking</label>
              <select>
                <option>Choose an Option</option>
                <option>Bank 1</option>
                <option>Bank 2</option>
              </select>
            </div>
            <button type="submit">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
