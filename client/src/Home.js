import logo from './large-open-air-course-with-golf-stick-and-ball-web-header.jpg';
import quality from './quality.png';
import inventory from './inventory.png';
import marketplace from './marketplace1.png';
import { NavLink } from 'react-router-dom';
function Home(){

    return (
        <div className='home-page' >
            <img src={logo}  alt={""} className='bathroom'/>
                {/* <h1 className='slogan'>Empowering Construction Efficiency</h1> */}
    
            
            
            <div className='features'>
                <div className='features1'>
                <a className='subcategory1'>THE GREEN</a>
                    <a className='category1'>NEWS & MEHR</a>
                    
                </div>
                <div className='features1'>
                   
                </div>
                <div className='features1'>
                   
                </div>
                <div className='features1'>
                   
                </div>
            </div>
            <div className='features'>
                <div className='mission'>
                  <div className='mission-text'>
                    <h1>Mission Statement</h1>
                    <p>At Supplyify, our mission is to empower contractors and owners on new and remodel construction projects by providing them with a comprehensive range of affordable, high-quality supplies and products. <br/><br/>We go beyond just offering products; we offer a powerful Construction Inventory Management solution that enables efficient material and tool tracking across multiple job sites. With Supplyify, you can stay ahead of your inventory needs with real-time alerts when supplies, materials, and parts are running low, helping you avoid costly project delays. <br/><br/>Additionally, we provide a convenient marketplace for buying and selling excess materials and used equipment, fostering sustainability and cost-effectiveness in the construction industry. Experience the convenience, affordability, and reliability of Supplyify for all your construction supply needs.</p>
                  </div>
                </div>
            </div>
            <div className='footer'>
                <div className='tm'> 
                        <p>© 2023 Supplyify Holdings, LLC. All rights reserved.</p>
                    <div className='tm1'>
                        <NavLink to="/privacy">Privacy Policy</NavLink>
                        <a>  || </a>
                        <NavLink to="/disclaimer">Site Disclaimer</NavLink>
                    </div >
                </div>
            </div>
       </div>
    )
};
export default Home;