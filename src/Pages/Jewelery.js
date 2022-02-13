import React, { Component } from 'react';
import Product from "../Components/Product/product"
import "../Styling/general.css"


async function getProductList(category) {
    const response = await fetch('https://fakestoreapi.com/products' + category);
    return response.json();
  }

const JeweleryListEmpty = () => (<h1>Lista de produse e goala</h1>)
const JeweleryListLoading= () => (<h1>Lista de produse se incarca...</h1>)


class Jewelery extends Component {
    constructor(props) {
        super(props);
        this.category = props.category
        this.state = {
          productList: [],
          isLoading: false,
        }
      }
    componentDidMount(){
        this.setState({isLoading:true})
        getProductList(this.category)
        .then((products)=>{
            this.setState({
            productList : products,
            isLoading : false
        })
        })
        .catch((error)=>{
            this.setState({isLoading: true})
        })
    }
    componentWillUnmount = () => {
        this.isComponentMounted = false;
        window.removeEventListener("resize", this.setDivSizeThrottleable);
      };

    renderJeweleryList(){
        const { productList, isLoading } = this.state;
        const isEmpty = productList.length === 0;

        if(isLoading){
            return(<JeweleryListLoading/>)
        }
        if(isEmpty){
            return(<JeweleryListEmpty/>)
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
             {this.renderJeweleryList()}
             </div>
     )  
    }
}

export default Jewelery
