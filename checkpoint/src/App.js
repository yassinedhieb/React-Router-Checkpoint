import React from 'react';
import Home from './home';
import Nav from './nav'
import Products from "./products";
import Category from './category';
import AdminArea from './adminArea';
import Shoes from './Categories/shoes';
import Boots from './Categories/boots';
import Footwear from './Categories/footwear';

import Loged from './logged/logged';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css';
import AdminRoutes from './AdminRoutes';

function App() {
  
  return (
    <Router>
    <div>
      <Nav />
      <Route path="/home" component={Home}/>
      <Route path="/category" component={Category}></Route>
     <div style={{display:"flex", justifyContent:"space-around"}}>
      <Route path="/products" component={Products}></Route>
      <AdminRoutes />
      </div>
      <Route path="/adminArea" exact component={AdminArea}></Route>
      <Route path="/adminArea/logged" exact component={Loged}></Route>
      <Route path="/category/shoes" component={Shoes}></Route>
      <Route path="/category/boots" component={Boots}></Route>
      <Route path="/category/footwear" component={Footwear}></Route>
    
   </div>
    
    </Router>
  );
}

export default App;
