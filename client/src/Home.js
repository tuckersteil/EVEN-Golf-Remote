import logo from './home-logo3.jpg';
import quality from './quality.png';
import inventory from './inventory.png';
import marketplace from './marketplace1.png';
import { NavLink } from 'react-router-dom';
function Home(){

    return (
        <div className='home-page' >
            <img src={logo}  alt={""}className='bathroom'/>
            <div className='slogan'>
                <h1>Empowering Construction Efficiency</h1>
            </div>
            <div className='features'>
                <div className='features1'>
                    <img src={quality} alt={""} className='feature-logo'/>
                    <div className='feature-text'>
                        <h1>Affordable Quality Supplies:</h1>
                        <p>We provide contractors and owners with affordable yet high-quality supplies and products for new and remodel construction projects.</p>
                    </div>
                </div>
                <div className='features2'>
                    <img src={inventory} alt={""} className='feature-logo'/>
                    <div className='feature-text1'>
                        <h1>Construction Inventory Management:</h1>
                        <p>Stay on top of your materials and tools with our powerful tracking solution. Receive real-time alerts to prevent project delays caused by low supplies.</p>
                    </div>
                </div>
                <div className='features3'>
                    <img src={marketplace} alt={""} className='feature-logo' />
                    <div className='feature-text1'>
                        <h1>Secondhand Supplies Marketplace:</h1>
                        <p>Buy and sell excess materials and used equipment on our platform, promoting sustainability and cost-effectiveness in the construction industry.</p>
                    </div>
                </div>
                <div className='mission'>
                  <div className='mission-text'>
                    <h1>Mission Statement</h1>
                    {/* <p>At Supplyify, our mission is to empower contractors and owners involved in new and remodel construction projects by providing affordable, yet high-quality supplies and products. We understand the importance of efficient inventory management in the construction industry, which is why we offer a powerful Construction Inventory Management solution. With our system, you can effectively track materials and tools across multiple job sites, receiving real-time alerts when supplies are running low to prevent costly project delays. <br/><br/>

                        In addition to our inventory management solution, we also provide a platform for buying and selling secondhand supplies. Our marketplace enables users to efficiently trade excess materials and used equipment, promoting sustainability and cost-effectiveness within the construction community.<br/><br/>

                        At Supplyify, we are dedicated to delivering exceptional value to our customers through our comprehensive range of services. By combining affordability, quality, and innovative solutions, we strive to be the go-to resource for contractors and owners, helping them streamline their projects, save time, and maximize their overall success.
                    </p> */}
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