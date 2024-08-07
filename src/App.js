import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import ProductCardFlipper from './components/ProductCardFlipper';
import { BrowserRouter as Router, Routes, Route, Link,useLocation ,useParams} from 'react-router-dom';
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

export const BreadcrumbComponent = () => {
  const location = useLocation();
  const { id } = useParams();

  const items = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/' },
  ];

  if (location.pathname.includes('/product/')) {
    const product = products.find(p => p.id === parseInt(id));
    items.push({ label: product?.name || 'Product' });
  }

  return (
    <BreadCrumb model={items} home={{ icon: 'pi pi-home', url: '/' }} />
  );
};

function App() {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith('/product');
  const PaymentPage1 = location.pathname.startsWith('/payment');
  const addCartPage = lcoation.pathname.startsWith('/Cart')

  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', command: () => window.location = "/" },
  ];

  const cartItems = [
    { name: 'Crayola 12 Count Washable Bulk Markers, Red', price: 7.40, quantity: 1 },
    { name: 'Crayola Green Washable Markers, Broad Line Markers, 12 Count', price: 9.88, quantity: 4 },
    { name: 'Crayola 12 Count Washable Bulk Markers, Blue', price: 8.06, quantity: 6 }
  ];

  const subtotal = 93.96;
  const savings = 50.00;
  const total = subtotal - savings;

  const CartItemIncrementer = () =>{

  }

  return (
     <> 
     { !PaymentPage1 && !isProductPage && (<div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <ProductGrid />
      </div>
    </div>) }
    <Routes>
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/payment" element={<PaymentPage/>}      />
    <Route path="/Cart" element={<ADDCart cartItems={cartItems} subtotal={subtotal} savings={savings} total={total} CartItemIncrementer={CartItemIncrementer}/>} />
    </Routes> 
    </>
  );
}

export default App;
