import React from 'react';
import Nike from './Products/Nike';
import Us from './Products/Us';
import Adidas from './Products/Adidas';
import Leecooper from './Products/Leecooper';
import Placeholder from './Products/Placeholder';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
const AdminRoutes = () => {
    return (  <Switch>
    <Route path="/products" exact component={Placeholder}></Route>
    <Route path="/products/Nike" component={Nike}></Route>
    <Route path="/products/Us" component={Us}></Route>
    <Route path="/products/Adidas" component={Adidas}></Route>
    <Route path="/products/Leecooper" component={Leecooper}></Route> </Switch>);
}
 
export default AdminRoutes;