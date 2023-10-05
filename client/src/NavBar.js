import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from './supplyify-logo1.png';

function NavBar() {
  return (
    // <header>
     
     
        <ul className="navbar-links">
          <li>
            <NavLink exact to="/" activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">
              OUR PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/secondhand" activeClassName="active">
              SECONDHAND SUPPLIES 
              MARKETPLACE
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink to="/FAQ" activeClassName="active">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructions" activeClassName="active">
              HOW TO ORDER
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" activeClassName="active">
              CONTACT US
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/promotions" activeClassName="active">
              PROMOTIONS
            </NavLink>
          </li> */}
          
          <li>
            <NavLink to="/myaccount" activeClassName="active">
              MY ACCOUNT
            </NavLink>
          </li>
        </ul>
      
    /* </header> */
  );
}

export default NavBar;