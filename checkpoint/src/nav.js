import React from 'react';
import {Link} from 'react-router-dom';


function nav() {

  const navStyle={
      color:'white',
      textDecoration:"none",


  }
  return (
    
      <ul className="nav-links">
          
          <li><Link style={navStyle} to= "/home">Home</Link></li>
       
          
          <li><Link style={navStyle} to ="/category">Category </Link></li>
         
          <Link style={navStyle} to ="/products">
          <li>Products</li>
          </Link>
          <Link style={navStyle} to ="/adminArea">
          <li>Admin Area</li>
          </Link>
      </ul>
  
  );
}

export default nav;