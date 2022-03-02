import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styling/Navbar.css';
import Dropdown from '../SubMenu/SubMenu';
import * as GiIcons from "react-icons/gi"
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"



function Navbar(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div id='navbar'>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo logo-crown' onClick={closeMobileMenu}>
          Kingsman
          <GiIcons.GiCrown className='fas crown'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Cart'
              className='nav-links'
              id='cart-number'
              onClick={closeMobileMenu}
            >
              <AiIcons.AiOutlineShoppingCart className="cart"/>
              <span className='obiecte'>{props.productCartList.length}</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Favorite'
              className='nav-links'
              id='cart-number'
              onClick={closeMobileMenu}
            >
              <BsIcons.BsHeart className="menu-heart"/>
              <span className='obiecte'>{props.FavoriteProductList.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;