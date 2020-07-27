import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';





function category() {


  return (
    <div>
      <ul>
          <Link to= "/category/shoes">
          <li>Shoes</li>
          </Link>
          <Link to ="/category/boots">
          <li>Boots</li>
          </Link>
          <Link to ="/category/footwear">
          <li>Footwear</li>
          </Link>
      </ul>
    </div>
  );
}

export default category;