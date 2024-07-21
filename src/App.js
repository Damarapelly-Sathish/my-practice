import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <ProductGrid />
      </div>
    </div>
  );
}

export default App;
