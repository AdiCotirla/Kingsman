import React from 'react';
import Product from '../Components/Product/product';


function getTotalPrice(productList) {
    let totalPrice = 0;
    productList.forEach(product => {
        totalPrice = totalPrice + product.price * product.quantity;
    })

    return totalPrice;
}
const Cart = (props) => {
    const total = getTotalPrice(props.productCartList)

    return (
        <div className="cart-page">
            <h1>List de produse</h1>
            {props.productCartList.map(productItem => {
                return (
                    <div key={productItem.id}>
                        <Product
                            title={productItem.title}
                            price={productItem.price}
                            image={productItem.image}
                        />
                        <h2>X {productItem.quantity}</h2>
                    </div>
                )
            })}
            <h2>Total: {total} lei</h2>
            <button>Trimite comanda</button>
        </div>
    )
}

export default Cart;