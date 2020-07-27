import React from 'react';
import Home from './home';
import Nav from './nav'
import Products from "./products";
import Category from './category';
import AdminArea from './adminArea';
import Shoes from './Categories/shoes';
import Boots from './Categories/boots';
import Footwear from './Categories/footwear';
import Nike from './Products/Nike';
import Us from './Products/Us';
import Adidas from './Products/Adidas';
import Leecooper from './Products/Leecooper';
import Placeholder from './Products/Placeholder';
import Loged from './logged/logged';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css';

function App() {
  
  return (
    <Router>
    <div>
      <Nav />
      <Route path="/home" component={Home}/>
      <Route path="/category" component={Category}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/adminArea" exact component={AdminArea}></Route>
      <Route path="/adminArea/logged" exact component={Loged}></Route>
      <Route path="/category/shoes" component={Shoes}></Route>
      <Route path="/category/boots" component={Boots}></Route>
      <Route path="/category/footwear" component={Footwear}></Route>
      <Route path="/products" exact component={Placeholder}></Route>
      <Route path="/products/Nike" component={Nike}></Route>
      <Route path="/products/Us" component={Us}></Route>
      <Route path="/products/Adidas" component={Adidas}></Route>
      <Route path="/products/Leecooper" component={Leecooper}></Route>



    </div>
    </Router>
  );
}

export default App;
