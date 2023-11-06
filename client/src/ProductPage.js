// import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
function ProductPage({addItemToCart}) {
    const location = useLocation();
    const product = location.state;
  
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(product.images[0]);

    const handleImageClick = (image) => {
      setMainImage(image);
    };

    const decreaseQuantity = () => {
      if (quantity > 0) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    };
  
    const increaseQuantity = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
 

  function cart(){
   
    const smallCartItem = {
        model: product.model,
        image: product.images[0],
        dimensions: product.dimensions,
        quantity: quantity
    }
    console.log(smallCartItem)
    addItemToCart(smallCartItem)
  }
    return (
      <div className='products'>
        
        <div className="image-gallery">
        {product.images.map((image, index) => (
          <div className="image-container" key={index}>
            <img
              src={image}
              alt={index + 1}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="main-image">
        <div className="image-zoom">
          <img src={mainImage} alt="Main" />
        </div>
      </div>
    

        <div className='description'>
          <h2>{product.model}</h2>
          <p>{product.description}</p>
          <div className="counter">
            <h3>Quantity:</h3>
            <span className='quantity'>
              <button onClick={decreaseQuantity}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={increaseQuantity}>+</button>
            </span>
            <button className='addCart' onClick={cart}>ADD TO CART</button>
          </div>
          <h4>Availability: {product.availability}</h4>
          <h4>Dimensions: {product.dimensions}</h4>
          <h4>Material: {product.material}</h4>
          <h4>Finish: {product.finish}</h4>
          <h4>Weight: {product.weight}</h4>
          <h4>Bevel: {product.bevel}</h4>
          <div className='shipping'>
            <h4>Shipping Details:</h4>
            <h4> - Boxed Shipping Weight: {product.shippingDetails.boxedWeight}</h4>
            <h4> - Shipping Dimensions: {product.shippingDetails.shippingDimensions}</h4>
            <h4> - Shipping Method: {product.shippingDetails.method}</h4>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductPage;