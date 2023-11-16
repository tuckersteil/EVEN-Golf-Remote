import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import logo from './new-logo1.png';
import down from './zdown.png';
// import Cart from './Cart';
import SearchBar from './SearchBar';
import { FaShoppingCart } from 'react-icons/fa';
import arrow from './arrow-up.png';
import './Header.css'


function Header({itemCount}) {
  const [isAccountOpen, setAccountOpen] = useState(false);
  const toggleAccountDropdown = () => {
    setAccountOpen(!isAccountOpen);
  };


  return (
    <header>
      <div className="top-section">
        <h1 className='logo'>EVEN.</h1>
          {/* <SearchBar /> */}
        
          {/* <button
          className={`my-accountbutton ${isAccountOpen ? 'open' : ''}`}
          onClick={toggleAccountDropdown}
        >
          My Tuck <img src={down} className="downicon" />
          
        </button> */}
          {/* {isAccountOpen && (
            <div className="account-dropdown">
                <div className='account-dropdown-content'>
                    <div className='margin1'>Customer Login</div>
                    <button className='margin2'>Sign In</button>
                    <hr className="separator" />
                    <div className='margin1'>Don't have an account?</div>
                    <button className='margin22' >Create an Account</button>
                </div>
            </div>
            )} */}
        
        {/* <NavLink to='/cart'>
        <div className="cart-section">
          <div className="cart-button" >
          <div className="cart-icon">
            <FaShoppingCart className="cart-icon__icon" />
            {itemCount > 0 && <span className="item-count">{itemCount}</span>}
          </div>
          </div>
          <div className='tuck'>Cart</div>
        </div>
        </NavLink> */}
    </div>

      <div className="goldbar"></div>
      <div className="navbar">
        {/* <NavBar /> */}
      </div>
      <div className="goldbar"></div>
    </header>
  );
}

export default Header;


