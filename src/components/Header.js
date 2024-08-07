import React from 'react';
import './Header.css';

function Header() {
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
        <a href="#">Cart</a>
        <a href="#">Sign In</a>
        <button>Create Account</button>
      </div>
    </header>
    </>
  );
}

export default Header;
