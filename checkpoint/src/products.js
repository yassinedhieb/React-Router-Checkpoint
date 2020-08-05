import React, { useState } from 'react';
import './App.css';
import {Link,Route} from 'react-router-dom';
import SingleProduct from './Products/SingleProduct';
import Placeholder from './Products/Placeholder'

function Products(props) {
  console.log(props)
  const prod={
    backgroundColor:'#D0D2DF',
    position:"relative",
    marginLeft:"5%"
  }
  const products=[
    {
      id:1,
      name:"Nike",
      link:"NIKE Liteforce Blue Sneakers",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status:"Available"
    },
    {
      id:2,
      name:"Adidas",
      link:"ADIDAS Adispree Running Shoes",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status:"Available"
    },
    {
      id:3,
      name:"Lee-Cooper",
      link:"Lee Cooper Mid Sneakers",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status:"Available"
    }
  ]
  return (
    <div >
      
      <div style={{display:"flex"}}> 
      <ul style={prod}>
        <li><h3>Products</h3></li>
        {products.map(el=><li  ><Link to= {`${props.match.url}/${el.id}`}>
          {el.link}
          </Link></li>)}
      </ul>
      <div>
      <Route exact path={"/products"} component={Placeholder}/>
      </div>
      <div style={{position:"absolute",marginLeft:"50%"}}>
      <Route path={`${props.match.path}/:productId`} render={(props)=><SingleProduct  products={products} {...props}/>}/>
      </div>
      </div>
    </div>
  );
}

export default Products;