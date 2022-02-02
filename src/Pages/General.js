import React, { Component } from 'react';
import Product from "../Components/Product/product"


async function getProductList() {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  }

const ProductListEmpty = () => (<h1>Lista de produse e goala</h1>)
const ProductListLoading= () => (<h1>Lista de produse se incarca...</h1>)


class General extends Component {
    constructor(props) {
        super(props);
        this.state = {
          productList: [],
          isLoading: false,
        }
      }
    componentDidMount(){
        this.setState({isLoading:true})
        getProductList()
        .then((products)=>{
            console.log(products)
            this.setState({
            productList : products,
            isLoading : false
        })
        })
        .catch((error)=>{
            this.setState({isLoading: true})
        })
    }

    renderProductList(){
        const { productList, isLoading } = this.state;
        const isEmpty = productList.length === 0;

        if(isLoading){
            return(<ProductListLoading/>)
        }
        if(isEmpty){
            return(<ProductListEmpty/>)
        }
        return productList.map(productItem => {
            return ( <Product 
                key = {productItem.id}
                title={productItem.title}
                price= {productItem.price}
                image = {productItem.image}
                onAddToCart={() => {
                    this.props.onAddToCart(productItem)
                }}/>)
        });
    }


  render() {
    return (<div className='Home'>
             {this.renderProductList()}
             </div>
     )  
    }
}

export default General
