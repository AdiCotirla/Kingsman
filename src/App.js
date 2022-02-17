import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import General from './Pages/General';
import Menu from './Components/Menu/menu';
import Cart from './Pages/cart';
import Electronics from './Pages/Electronics';
import MenClothing from './Pages/MenClothing';
import Jewelery from './Pages/Jewelery';
import Home from './Pages/home';
import Services from './Pages/Services';
import Add from './Components/Add/Add';


function App() {
  const [cartList, setCartList] = useState([]);

  const handleAddProductToCart = (product) => {
    const SuccessAdd = () => {
      document.getElementById('add').style.right = "20px"
      
      setTimeout(()=>{
        document.getElementById('add').style.right = "-200px"
        },3000)
    }
    const newList = [...cartList]
    const index = newList.findIndex(item => item.id === product.id);
    if (index !== -1) {
      newList[index].quantity++;
    } else {
      product.quantity = 1;
      newList.push(product);
    }

    setCartList(newList);
    SuccessAdd()
    
  }

  return (
    <Router basename='/Kingsman'>
      <div className="App">
      <Menu/>
      <Add/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Services" element={<Services/>} />
          <Route exact path="/GeneralServices" element={<General category="/"  onAddToCart={(product) => { handleAddProductToCart(product) }} />} />
          <Route exact path='/Cart' element={<Cart productCartList={cartList} />} />
          <Route exact path="/electronics" element={<Electronics category="/category/electronics" onAddToCart={(product) => { handleAddProductToCart(product) }} />} />
          <Route exact path="/MenCloth" element={<MenClothing category="/category/men's clothing" onAddToCart={(product) => { handleAddProductToCart(product) }} />} />
          <Route exact path="/jewelery" element={<Jewelery category="/category/jewelery" onAddToCart={(product) => { handleAddProductToCart(product) }} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App