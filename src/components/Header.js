// src/Navbar.js

import './Header.css';
import Sidebar from './Sidebar.js';
import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {fetchCartProductsRequest} from './actionforcart'
import { useSelector, useDispatch,} from 'react-redux';

const Navbar = (props) => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const handleShopClick = () => {
    setIsShopOpen(!isShopOpen);
  };
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-top-content">
          <span>Complimentary Ground Shipping On Domestic Orders Of $250 Or More!</span>
          <div className="navbar-top-links">
          <a href="#" className="navbar-link">My Account</a>
          <a href="#" className="navbar-link">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="navbar-main">
      {!isShopOpen && (<div className="navbar-logo">BLACK HALO</div>)}
      <div id="sidebar-nav123">
        <a href="#"  onClick={handleShopClick} >SHOP</a> </div>
        <div id="sidebar-nav678">' 
        {isShopOpen && <Sidebar />}
        </div>
        {!isShopOpen && (<nav className="navbar-links">
          <a href="#">SHOP ALL </a>
          <a href="#">NEW ARRIVALS</a>
          <a href="#">BEST SELLERS</a>
          <a href="#">DRESSES</a>
          <a href="#">JUMPSUITS</a>
          <a href="#">EVE BY LAUREL BERMAN</a>
          <a href="#">THE JACKIE O</a>
        </nav>) }
        <div className="navbar-icons">
          <span className="icon-search"></span>
          <span className="icon-user"></span>
          <Link to={`/cart`} >
          <div style={{ marginLeft: 'auto', position: 'relative' }} > cart <div style={{ 
            backgroundColor: 'red',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            color: 'white',
            cursor:'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            fontSize: '14px'
          }}>
            {props.cartItems.length}
          </div>
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
