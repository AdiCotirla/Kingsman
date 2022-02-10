import React from 'react';
import "../../Styling/product.css"

const Product = (props) => {
  return <div className='product' key={props.id}>
      <img src={props.image} alt="product"></img>
      <p>{props.title}</p>
      <h3>Price:{props.price}</h3>
      {props.onAddToCart ? <button onClick={props.onAddToCart}>Add to cart</button>:null}
  </div>;
}

export default Product