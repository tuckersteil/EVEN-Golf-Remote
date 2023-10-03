import React, { useState, useEffect } from 'react';

function Cart({ cartItems, itemCount }) {
  const [quantities, setQuantities] = useState([]);


  useEffect(() => {
    // Initialize quantities with the initial values from cartItems
    const initialQuantities = cartItems.map((item) => item.quantity);
    setQuantities(initialQuantities);
  }, [cartItems]);

  const decreaseQuantity = (index) => {
    itemCount = itemCount - 1 
    if (quantities[index] > 0) {
      setQuantities((prevQuantities) => {
        const updatedQuantities = [...prevQuantities];
        updatedQuantities[index] = prevQuantities[index] - 1;
        return updatedQuantities;
      });
    }
  };

  const increaseQuantity = (index) => {
    itemCount = itemCount + 1 
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      updatedQuantities[index] = prevQuantities[index] + 1;
      return updatedQuantities;
    });
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-header">
        <span>Item(s): {itemCount}</span>
        <span>Quantity</span>
        <span>Item Total</span>
      </div>
      <div className="cart-products">
        {cartItems.map((item, index) => (
          <div className="cart-product" key={item.id}>
            <div className="product-image-cart">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-model">
              <h3>{item.model}</h3>
            </div>
            <div className="cart-dim">
              <h5>({item.dimensions})</h5>
            </div>
            <div className="cart-quantity">
              <span className="quantity-c">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <input type="number" value={quantities[index]} readOnly />
                <button onClick={() => increaseQuantity(index)}>+</button>
              </span>
            </div>
            <div className="cart-price">
              <p>${quantities[index] * item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <h1>Est. Total</h1>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;





/* <span className='quantityyyy'>
              <button onClick={decreaseQuantity}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={increaseQuantity}>+</button>
      </span> */