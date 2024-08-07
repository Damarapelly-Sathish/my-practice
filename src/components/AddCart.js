import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

const ADDCart = ({ cartItems, subtotal, savings, total }) => {
  const deleteItemTemplate = () => <Button icon="pi pi-trash" className="p-button-danger" />;

  const quantityTemplate = (rowData) => (
    <InputNumber value={rowData.quantity} readOnly />
  );

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
          <Button label="Proceed to Checkout" icon="pi pi-check" className="p-button-success" />
        </div>
      </div>
    </div>
  );
};

export default ADDCart;