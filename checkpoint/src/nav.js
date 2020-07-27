import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function nav() {

  const navStyle={
      color:'white'
  }
  return (
    <nav>
      <ul className="nav-links">
          <Link style={navStyle} to= "/home">
          <li>Home</li>
          </Link>
          <Link style={navStyle} to ="/category">
          <li>Category</li>
          </Link>
          <Link style={navStyle} to ="/products">
          <li>Products</li>
          </Link>
          <Link style={navStyle} to ="/adminArea">
          <li>Admin Area</li>
          </Link>
      </ul>
    </nav>
  );
}

export default nav;