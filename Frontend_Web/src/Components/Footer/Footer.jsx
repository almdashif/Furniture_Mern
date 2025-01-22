import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div id='Footer'>
            <div className="footerContainer">
                <div className="leftContainer">
                    <h2>TULOS</h2>
                    <p>Get newsletter update for upcoming product and best discount for all item</p>
                    <div className="emailContainer">
                        <input type="text" placeholder='Your Email' />
                        <a href="">Submit</a>
                    </div>
                </div>
                <div className="rightContainer">
                    <ul>
                        <h5>Product</h5>
                        <li><a href="">Tshirt</a></li>
                        <li><a href="">Jacket</a></li>
                        <li><a href="">Shoes</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Sunglasses</a></li>
                        <li><a href="">Tuxedo</a></li>
                    </ul>

                    <ul>
                        <h5>Categories</h5>
                        <li><a href="">Men</a></li>
                        <li><a href="">Women</a></li>
                        <li><a href="">Kids</a></li>
                        <li><a href="">Gift</a></li>
                        <li><a href="">New Arrival</a></li>
                    </ul>

                    <ul>
                        <h5>Our Social Media</h5>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Youtube</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div>
            </div>
          
        </div>
    )
}

export default Footer
