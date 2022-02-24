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
import Footer from './Components/Footer/Footer';
import * as BsIcons from "react-icons/bs"



function App() {
  const [cartList, setCartList] = useState([]);

  const ShowArrow =()=>{
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      let arrow = document.getElementById("arrow-up").style.visibility = "visible"
    } else {
      let arrow = document.getElementById("arrow-up").style.visibility = "hidden"
    }
  }
  window.onscroll = function() {ShowArrow()};

  const scrollTop = () =>
  {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
  const handleAddProductToCart = (product) => {
    const newList = [...cartList]
    const index = newList.findIndex(item => item.id === product.id);
    if (index !== -1) {
      newList[index].quantity++;
    } else {
      product.quantity = 1;
      newList.push(product);
    }

    setCartList(newList);
    
  }

  return (
    <Router basename='/Kingsman'>
      <div className="App">
      <Menu productCartList={cartList}/>
      <Add/>
        <Routes>
          <Route exact path="/" element={<><Home/></>} />
          <Route exact path="/Services" element={<><Services/> <Footer/></>} />
          <Route exact path="/GeneralServices" element={ <><General category="/"  onAddToCart={(product) => { handleAddProductToCart(product) }} /> <Footer/></>} />
          <Route exact path='/Cart' element={<><Cart productCartList={cartList} /> <Footer/></>} />
          <Route exact path="/electronics" element={<><Electronics category="/category/electronics" onAddToCart={(product) => { handleAddProductToCart(product) }}/> <Footer/> </>} />
          <Route exact path="/MenCloth" element={<><MenClothing category="/category/men's clothing" onAddToCart={(product) => { handleAddProductToCart(product) }} /><Footer/> </>} />
          <Route exact path="/jewelery" element={<><Jewelery category="/category/jewelery" onAddToCart={(product) => { handleAddProductToCart(product) }} /> <Footer/> </>} />
        </Routes>
        <BsIcons.BsFillArrowUpCircleFill id="arrow-up" className='arrow-up' onClick={()=>{scrollTop()}}/>
      </div>
    </Router>
  )
}

export default App