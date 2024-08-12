import {React,useEffect} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import {Link} from 'react-router-dom'
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
  };

  return (
    <div className="p-grid p-justify-center">
      <div className="p-col-12 p-md-8">
        <h2>Shopping Cart</h2>
        <DataTable value={cartItems} className="p-datatable-gridlines p-datatable-sm">
          <Column field="name" header="Product" />
          <Column field="quantity" header="Quantity" body={quantityTemplate} />
          <Column field="price" header="Price" />
          <Column body={deleteItemTemplate} />
        </DataTable>
        <div className="p-d-flex p-jc-between p-mt-3">
          <div className="cart-summary">
            <div>Subtotal: ${subtotal.toFixed(2)}</div>
            <div>Savings: -${savings.toFixed(2)}</div>
            <div>Total: ${total.toFixed(2)}</div>
          </div>
          <Link to={`/payment`}>{<Button label="Proceed to Checkout" icon="pi pi-check" className="p-button-success" />}</Link>
        </div>
      </div>
    </div>
  );
};

export default ADDCart;