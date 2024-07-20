import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductCardFlipper from './components/ProductCardFlipper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <ProductCardFlipper />
      </div>
    </div>
  );
}

export default App;
