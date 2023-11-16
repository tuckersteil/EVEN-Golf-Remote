import React, { useState } from 'react';
import './App.css';
// import NavBar from './NavBar';
import Home from './Home';
import SecondHand from './SecondHand';
import Products from './Products';
import MyAccount from './MyAccount';
import Services from './Services';
import Cart from './Cart';
import FAQ from './FAQ';
import Header from './Header'
import ContactUs from './ContactUs';
import OrderInstructions from './OrderInstructions';
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import ProductPage from './ProductPage';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  function addItemToCart(smallCartItem){
    console.log(smallCartItem)
    setCartItemCount(cartItemCount + smallCartItem.quantity);
    setCartItems([...cartItems, smallCartItem])
  }

 console.log(cartItems)
  return (
    <div >
        <Header itemCount={cartItemCount} />
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} itemCount={cartItemCount}/>} />
          <Route path='/product-page' element={<ProductPage addItemToCart={addItemToCart}/>} />
          <Route path="/secondhand" element={<SecondHand />} />
          <Route path="/services" element={<Services />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/instructions" element={<OrderInstructions />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/promotions" element={<Promotions />} /> */}
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
    </div>
  );
}


export default App;


