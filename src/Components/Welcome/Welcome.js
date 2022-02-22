import React from 'react'
import "../../Styling/welcome.css"
import { Link } from 'react-router-dom'
export default function Welcome() {

  return (
    <div className='welcome-container'>
        <div className='moving' id='moving-header'>
        <div className='move'>
        <h1 className='anunt'>Kingsman</h1>
        <h2 className='anunt'>The golden circle</h2>
        <Link to='/services'>
          <button className='button'>
            Enter the store
          <div className="button__horizontal"></div>
	        <div className="button__vertical"></div>
          </button>
          </Link>
        </div>
        </div>
    </div>
  )
}