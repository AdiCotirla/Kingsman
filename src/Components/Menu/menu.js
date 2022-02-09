import {
    Link
  } from "react-router-dom";
  import React from 'react';
  import { MenuData } from "../../Data/MenuData";
  import logo from "../../assets/logo.png"
  import "../../Styling/menu.css"
  export default function Menu() {
    return(<div className="menu">
          <img src={logo} alt="Kingsman Logo" className="logo"></img>
          <div className="menu-links">
          {MenuData.map((item, index)=>{
                return (
                        <Link to ={item.path} key={index} onClick = {item.click}>
                            {item.title}
                        </Link>
                )
            })}
            </div>
    </div>
    )}
  