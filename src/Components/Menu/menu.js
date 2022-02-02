import {
    Link
  } from "react-router-dom";
  import React from 'react';
  import { MenuData } from "../../Data/MenuData";
  
  export default function Menu() {
    return(<div>
          {MenuData.map((item, index)=>{
                return (
                        <Link to ={item.path} key={index}>
                            {item.title}
                        </Link>
                )
            })}
    </div>
    )}
  