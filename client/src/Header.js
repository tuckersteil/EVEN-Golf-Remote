import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import logo from './new-logo1.png';
// import Cart from './Cart';
import SearchBar from './SearchBar';
import { FaShoppingCart } from 'react-icons/fa';

function Header({itemCount}) {
  const [isAccountOpen, setAccountOpen] = useState(false);
  const toggleAccountDropdown = () => {
    setAccountOpen(!isAccountOpen);
  };


  return (
    <header>
      <div className="top-section">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="search-filter">
          <SearchBar />
        </div>
        <div className="my-account">
          <button className="account-dropdown" onClick={toggleAccountDropdown}>
            My Account
          </button>
          {isAccountOpen && (
            <div className="account-dropdown-content">
              <NavLink to="/signin">Sign In</NavLink>
              <NavLink to="/create-account">Create Account</NavLink>
            </div>
          )}
        </div>
        <NavLink to='/cart'>
        <div className="cart-section">
          <div className="cart-button" >
          <div className="cart-icon">
            <FaShoppingCart className="cart-icon__icon" />
            {itemCount > 0 && <span className="item-count">{itemCount}</span>}
          </div>
          </div>
          <span className='tuck'>Cart</span>
        </div>
        </NavLink>
      </div>
      <div className="goldbar"></div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="goldbar"></div>
    </header>
  );
}

export default Header;


