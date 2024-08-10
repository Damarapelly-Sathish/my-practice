import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header({ cartItems}) {
  return (
    <>
    <header className="header">
      <div className="logo">ascolour</div>
      <nav className="nav">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Headwear</a>
        <a href="#">Accessories</a>
        <a href="#">Kids</a>
        <a href="#">Sale</a>
        <a href="#">About</a>
        <a href="#">Journal</a>
      </nav>
      <div className="account-actions">
        <a href="#">Search</a>
        <Link to={`/cart`}>
        <div style={{ marginLeft: 'auto', position: 'relative' }}> cart <div style={{ 
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
            {cartItems.length}
          </div>
          </div>
          </Link>
        <a href="#">Sign In</a>
        <button>Create Account</button>
      </div>
    </header>
    </>
  );
}

export default Header;
