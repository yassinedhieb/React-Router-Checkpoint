import React from 'react';
const SingleProduct = (props) => {
    const produit=props.products.find(el=>el.id===Number(props.match.params.productId))
    return (<div>
        <h1>{produit.link}</h1>
        <p>{produit.description}</p>
        <hr/>
        <h3>{produit.status}</h3>
      </div>  );
}
 
export default SingleProduct;