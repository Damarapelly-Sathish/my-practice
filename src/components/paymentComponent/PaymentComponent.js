import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from './paymentActions'; // Adjust the path as necessary

const PaymentComponent = () => {
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.payment);

  const handlePayment = async () => {
    const amount = 500; // Set the amount in INR
    dispatch(createOrder(amount));
  };

  React.useEffect(() => {
    if (order.id) {
      const options = {
        key: 'rzp_test_XmfhcX8JGQW33n', // Replace with your Key ID
        amount: order.amount, // Amount is in currency subunits
        currency: order.currency,
        name: 'webgine',
        description: 'Productid',
        order_id: order.id,
        handler: function (response) {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);
          alert(`Signature: ${response.razorpay_signature}`);
        },
        prefill: {
          name: 'Test User',
          email: 'test.user@example.com',
          contact: '9999999999'
        },
        notes: {
          address: 'Test Address'
        },
        theme: {
          color: '#3399cc'
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
  }, [order]);

  return (
    <div>
      <h2>Make a Payment</h2>
      {loading ? <p>Loading...</p> : <button onClick={handlePayment}>Pay ₹500</button>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default PaymentComponent;
