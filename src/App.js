import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import General from './Pages/General';
import Electronics from './Pages/Electronics';
import MenClothing from './Pages/MenClothing';
import Jewelery from './Pages/Jewelery';
import Menu from './Components/Menu/menu';

function App() {
  const [cartList, setCartList] = useState([]);

  const handleAddProductToCart = (product) => {


    console.log('handleAddProductToCart', product);

    const newList = [...cartList]

    const index = newList.findIndex(item => item.id === product.id);
    if (index !== -1) {
      newList[index].quantity++;
      console.log(newList[index]);
    } else {
      product.quantity = 1;
      newList.push(product);
    }

    setCartList(newList);
  }

  return (
    <Router>
      <div className="App">
      <Menu/>
        <Routes>
          <Route exact path="/" element={<General onAddToCart={(product) => { handleAddProductToCart(product)}}/>}/>
          <Route exact path="Home" element={<Menu/>}/>
          <Route exact path="/electronics" element={<Electronics/>}/>
          <Route exact path="/MenCloth" element={<MenClothing/>}/>
          <Route exact path="/jewelery" element={<Jewelery/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App