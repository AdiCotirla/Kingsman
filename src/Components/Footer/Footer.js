import React from 'react'
import logo from "../../assets/new.jpeg"
import "../../Styling/footer.css"
export default function Footer() {
  return (
    <div className='position-footer'>
    <div className='footer'>
        <div className='logo-position'>
        <img src={logo} alt="logo" className='logo-footer'/>
        </div>
    </div>
    </div>
  )
}
