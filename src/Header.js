// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for this component
import logo from './Components/images/Rk_dcss_page-0001-removebg-preview.png'; // Import your logo image

const Header = () => {
  return (
    <nav className="header-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
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
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
