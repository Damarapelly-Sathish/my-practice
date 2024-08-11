import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import ProductCardFlipper from './components/ProductCardFlipper';
import { Routes, Route } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';  // Import theme
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';   
import { Menubar } from 'primereact/menubar';
import ProductPage from './Pages/ProductPage';
import { BreadCrumb } from 'primereact/breadcrumb';
import PaymentPage from './components/PaymentPage';
import ADDCart from './components/AddCart';

import ProductGrid from './components/ProductGrid';



import './App.css';

const products = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', description: 'This is Product 1' },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', description: 'This is Product 2' },
  // Add more products as needed
];

// export const BreadcrumbComponent = () => {
//   const location = useLocation();
//   const { id } = useParams();

  

//   const items = [
//     { label: 'Home', url: '/' },
//     { label: 'Products', url: '/' },
//   ];

//   if (location.pathname.includes('/product/')) {
//     const product = products.find(p => p.id === parseInt(id));
//     items.push({ label: product?.name || 'Product' });
//   }

//   return (
//     <BreadCrumb model={items} home={{ icon: 'pi pi-home', url: '/' }} />
//   );
// };

function App() {
  // const location = useLocation();
  // const isProductPage = location.pathname.startsWith('/product');
  // const PaymentPage1 = location.pathname.startsWith('/payment');

  // const addCartPage = location.pathname.startsWith('/cart')

  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', command: () => window.location = "/" },
  ];

  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20, quantity: 2 },
  ]);


  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const savings = 0; // Calculate savings if needed
  const total = subtotal - savings;
  
  return (
     <> 
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header cartItems={cartItems}/>
            <div className="main-content">
              <ProductGrid setCartItems={setCartItems}/>
            </div>
          </div>
        } />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/cart" element={<ADDCart cartItems={cartItems} subtotal={subtotal} savings={savings} total={total} setCartItems={setCartItems} />} />
      </Routes>
    </>
  );
}

export default App;
