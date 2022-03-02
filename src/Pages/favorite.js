import React from 'react';
import Product from '../Components/Product/product';


const Favorite = (props) => {

    return (
        <div className="cart-page">
            <h1>List de produse</h1>
            {props.FavoriteProductList.map(productItem => {
                return (
                    <div key={productItem.id}>
                        <Product
                            title={productItem.title}
                            price={productItem.price}
                            image={productItem.image}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Favorite;