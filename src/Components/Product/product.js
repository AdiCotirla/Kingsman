import React, {useState} from 'react';
import "../../Styling/product.css"
import * as BsIcons from "react-icons/bs"
const Product = (props) => {
  const [liked, setLiked] = useState(false)
  const showLiked = () => setLiked(!liked)
  const AdaugareFavorite =()=>
  {
    props.onAddToFavorite()
    showLiked()
  }
  return <div className='product' id="a" key={props.id}>
      <img src={props.image} alt="product"></img>
      <p className='product-title'>{props.title}</p>
      <h3 className='product-price'>Price:{props.price}$</h3>
      {props.onAddToCart ? <button onClick={props.onAddToCart} className = "cart-btn">Add to cart</button>:null}
      <div className='favorites' id="b">
      {props.onAddToCart ? <BsIcons.BsHeartFill className={liked ? "favorite-button yes full" : "favorite-button no"} onClick={AdaugareFavorite}/>:null}
      {props.onAddToCart ? <BsIcons.BsHeart className={liked ? "favorite-button no" : "favorite-button yes"} onClick={AdaugareFavorite}/> :null}
      </div>
  </div>;
}

export default Product