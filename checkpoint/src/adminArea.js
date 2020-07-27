import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function adminArea() {

  
  return (
    <div>
      <p>You must log in to view the page at /admin</p>
      <Link to= "/adminArea/logged">
         <button>Log In</button>
      </Link>
    </div>
  );
}

export default adminArea;