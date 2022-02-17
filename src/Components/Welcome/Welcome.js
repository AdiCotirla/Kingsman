import React from 'react'
import "../../Styling/welcome.css"

export default function Welcome() {

    window.onscroll = function() {
        let moving = document.getElementById('moving-header')
        let value = window.scrollY
        moving.style.top = value * 1.05 + "px"
     };

    // function FixMenu() {
    //    document.getElementById('moving-headers').style.margin = '40px 0 0 0' 
    // }
    
  return (
    <div className='welcome-container'>
        <div className='moving' id='moving-header'>
            <div className='move'>
        <span className='anunt' >WELCOME TO</span>
        <h1 className='anunt'>KINGSMAN</h1>
        </div>
        </div>
    </div>
  )
}
