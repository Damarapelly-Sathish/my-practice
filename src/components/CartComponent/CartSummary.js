import React from 'react';

function CartSummary({ subtotal, total }) {
  return (
    <div className="cart-summary">
      <h3>Summary</h3>
      <div className="summary-item">
        <p>Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      {/* <div className="summary-item">
        <p>Estimated Shipping & Handling</p>
        <p>${shipping.toFixed(2)}</p>
      </div> */}
      {/* <div className="summary-item">
        <p>Estimated Tax</p>
        <p>${tax.toFixed(2)}</p>
      </div> */}
      <div className="summary-item total">
        <h4>Total</h4>
        <h4>${total.toFixed(2)}</h4>
      </div>
      <button className="checkout-btn">Checkout</button>
      <button className="paypal-btn">PayPal</button>
    </div>
  );
}

export default CartSummary;
