import React, { useState } from 'react';
import SearchBar1 from './SearchBar1';
import lightbulb from './zlightbulb.png';
import stairs from './zstairs.png';
import window from './zwindow.png';
import medicinecabinet from './zmedicine-cabinet.png';
import mirror from './zmirror.png';
import pull from './zpull-up.png';
import shower from './zshower.png';
import towel from './ztowel.png';
import curtain from './zcurtains.png';
import door from './zdoor.png';
import pipe from './zpipes.png';
function Secondhand(){

    const allProducts= [
        {
            category: 'Mirrors',
            price: '$300',
            model: '20380',
            description: 'Acrylic and brass starburst mirror. Non-beveled center mirror. D-ring hardware provided.',
            availability: 'IN STOCK',
            dimensions: '34 X 34',
            material: 'ACRYLIC, BRASS, WOOD & MIRROR',
            finish: 'ACRYLIC & BRUSHED BRASS',
            images: [
                'https://www.mirrorhome.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20380_front_new_shot_2021_1500_1.jpg', 
                'https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20380_side_new_shot_2021_1500.jpg', 
                'https://www.mirrorhome.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20380_lifestyle_1500.jpg'
            ],
            weight: '22 LBS',
            bevel: 'NO',
            shippingDetails: {
            boxedWeight: '110 LBS', 
            shippingDimensions: '26 X 47 X 67',
            method: 'FREIGHT'
            }
        },
        {
            category: 'Medicine Cabinets',
            price: '$450',
            model: 'Surface Mount Bathroom Medicine Cabinet with Mirror',
            description: 'A perfect complement to any bathroom style, the Glacier Bay 16 in. W x 26 in. H x 4-1/2 in. D Frameless Recessed or Surface-Mount Bathroom Medicine Cabinet features beveled edges and a classic frameless design.',
            availability: 'IN STOCK',
            dimensions: '29.06 X 18.63 X 7.03',
            material: 'Wood',
            finish: 'White',
            images: [
                'https://images.thdstatic.com/productImages/17293796-f72a-4e8a-a53b-689305fb3d4d/svn/white-glacier-bay-medicine-cabinets-with-mirrors-45406-4f.2_max.jpg', 
                'https://images.thdstatic.com/productImages/1700ae9f-d72f-471f-b86f-e42c1e654b94/svn/white-glacier-bay-medicine-cabinets-with-mirrors-45406-e1.1_max.jpg',
                'https://images.thdstatic.com/productImages/c6639505-7e20-492f-b732-e2a52f56f5f8/svn/white-glacier-bay-medicine-cabinets-with-mirrors-45406-31.3_max.jpg'
                
            ],
            weight: '11.4 LBS',
            bevel: 'YES',
            shippingDetails: {
            boxedWeight: '13 LBS', 
            shippingDimensions: '32 X 20 X 8',
            method: 'GROUND'
            }
          }
    ]

    const [filteredProducts, setFilteredProducts] = useState(allProducts);

   
    return (
    <div className='SSMcontainer'>

        <div className='SSMleft-div'>

            <div className='LeftNavMtop'>
                <h1>Marketplace</h1>
                <div className="search-filter">
                    <SearchBar1 />
                </div>
                <div>
                    <button>+ Create Listing</button>
                </div>
                
            </div>
          
            <div className='LeftNavMtop1'>
                <h2>Current Location: </h2>
                <button>Los Angeles</button> 
            </div>

            <div className='CatSSM'>
                <h2>Categories</h2>
                    <ul><img src={lightbulb} className="SSMicons"/>Light Fixtures</ul>
                    <ul><img src={stairs} className="SSMicons"/>Glass Railing Systems</ul>
                    <ul><img src={window} className="SSMicons"/>Windows</ul>
                    <ul><img src={medicinecabinet} className="SSMicons"/>Medicine Cabinets</ul>
                    <ul><img src={mirror} className="SSMicons"/>Mirrors</ul>
                    <ul><img src={pull} className="SSMicons"/>Cabinet Pulls and Handles</ul>
                    <ul><img src={shower} className="SSMicons"/>Shower Glass Encolsures</ul>
                    <ul><img src={towel} className="SSMicons"/>Bathroom Accessories</ul>
                    <ul><img src={curtain} className="SSMicons"/>Window Shades</ul>
                    <ul><img src={door} className="SSMicons"/>Solid Wood Doors</ul>
                    <ul><img src={pipe} className="SSMicons"/>Plumbing Fixtures</ul>
            </div>

        </div>
        <div className='SSMright-div'>
            <div className="zproduct-grid">
                {filteredProducts.map((product) => (
                    <div key={product.model}  className="zproduct-card">
                        <h2>{product.model}</h2>
                        <div className="zproduct-image">
                            <img src={product.images[0]} alt={product.model} />
                        </div>

                        <div className="zproduct-info">
                            <h3>{product.price}</h3>
                            <p>- {product.dimensions}</p>
                            <p>- {product.material}</p>
                            <p>- {product.availability}</p>
                        </div>
                    </div>
                ))}
             </div>
        </div>

    </div>
    )
};
export default Secondhand;
// need to add credit somewhere
{/* <a href="https://www.flaticon.com/free-icons/plumbing" title="plumbing icons">Plumbing icons created by IconBaandar - Flaticon</a> */}