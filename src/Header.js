import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for this component

const Header = () => {
  return (
    <nav className="header-container">
      <div className="logo">
        <Link to="/">RK Industries</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
