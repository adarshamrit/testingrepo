// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import Cart  from './Cart';

const Navbar = ({ categories, onCategoryChange }) => {
  return (
    <nav className="navbar">
      {categories.map(category => (
        <a
          key={category}
          href="#"
          className="nav-item"
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </a>
      ))}
      <span className="spacer"></span> {/* Spacer element */}
      <a href="#" className="nav-item">Contact</a>
      <a href="#" className="nav-item">About</a>
      <Link to="/Cart" className="nav-item">View Cart ({Cart.length})</Link> {/* Use Link to navigate to the cart page */}
    </nav>
  );
};

export default Navbar;
