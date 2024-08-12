import {React,useEffect} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import {Link} from 'react-router-dom'
import '../StyleSheets/cart.css'
import CartSummary from './CartComponent/CartSummary'
import RecommendedProducts from './CartComponent/RecommendedProducts'
import { useSelector, useDispatch} from 'react-redux';
import {FetchCartData} from './actionforcart'
import {store} from './store';

function ADDCart({cartItems,subtotal,savings,total,removeFromCart,updateQuantity}){
  const { loading, cart, error }=useSelector(state1 => state1.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    store.dispatch(FetchCartData());
  }, [dispatch]);
  console.log(cart)
  const deleteItemTemplate = (rowData) => {
    return (
      <Button 
        icon="pi pi-trash" 
        className="p-button-danger" 
        onClick={() => removeFromCart(rowData.id)} 
        tooltip="Delete"
      />
    );
  };

  // Template for the quantity input
  const quantityTemplate = (cart) => {
    return (
      <InputNumber 
        value={cart.quantity} 
        onValueChange={(e) => updateQuantity(cart.id, e.value)} 
        showButtons 
        buttonLayout="horizontal"
        min={1}
        decrementButtonClassName="p-button-secondary" 
        incrementButtonClassName="p-button-secondary" 
      />
    );

function ADDCart({cartItems,subtotal,savings,total,setCartItems}){
  // Template for the delete button
  // Function to increment quantity
  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.name === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Function to decrement quantity
  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.name === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.name !== id));
  };

  const recommendedProducts = [
    {
      id: 1,
      name: 'Nike Everyday Plus Cushioned',
      price: 28.00,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Nike Sportswear Club',
      price: 18.97,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Nike Dunk Low',
      price: 115.00,
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <>
    
    <div className=" cart-container" >
      <div style={{display:"flex",justifyContent: "space-between",alignItems:"flex-start"}}> 
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item">
          <div className="cart-item-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="cart-item-details">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>Size: {item.size}</p>
            <div className="quantity-controls">
              <button onClick={() => decrementQuantity(item.name)}>-</button>
              <span>Quantity: {item.quantity}</span>
              <button onClick={() => incrementQuantity(item.name)}>+</button>
            </div>
            <div className="cart-item-actions">
            <button onClick={() => removeFromCart(item.name)}>Remove</button>
            <button >Like</button>
            </div>
          </div>
          <div className="cart-item-price">
            <p>${item.price}</p>
          </div>
          {/* <div className="cart-item-actions"> */}
           
          {/* </div> */}
        </div>
        ))}
      </div>

      <div className="cart-summary-container">
        <CartSummary subtotal={subtotal}  total={total} />
      </div>
      </div>

      <div className="recommended-products-container">
        <RecommendedProducts products={recommendedProducts} />
      </div>

  </div>
      </>
   
  );
};

export default ADDCart;