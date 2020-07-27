import React, { useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';




function products() {
  const prod={
    backgroundColor:'#D0D2DF'
  }

  return (
    <div style={prod}>
      <h3>Products</h3>
      <ul>
          <Link to= "/products/Nike">
          <li >NIKE Liteforce Blue Sneakers</li>
          </Link>
          <Link to ="/products/Us">
          <li>U.S. POLO ASSN. Slippers</li>
          </Link>
          <Link to ="/products/Adidas">
          <li>ADIDAS Adispree Running Shoes</li>
          </Link>
          <Link to ="/products/Leecooper">
          <li>Lee Cooper Mid Sneakers</li>
          </Link>
      </ul>
      
    </div>
  );
}

export default products;