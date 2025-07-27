import { Component } from 'react';
import '../LuxuryDemo/luxuryDemo.scss';
export class LuxuryDemo extends Component {
    render() {
        return (
            <section id='LuxuryDemo'>
                <div className="mainContainer">
                    <div className="leftContainer">
                        <h3>Luxury Furniture Starts with the Best Quality Materials</h3>
                        <p>Our products are designed to be user-friendly and intuitive. We are constantly updating our products to provide the best user experience.</p>
                        <a href="#" className="shopNowBtn">Learn More</a>
                    </div>
                    <div className="rightContainer">
                        <div className="imageContainer">
                            <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/home-mask-image.webp" alt="" />

                            <div className="clipPath">
                                <div className="clipPath1"></div>
                                <div className="clipPath2"></div>
                                <div className="clipPath2"></div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
        )
    }
}

export default LuxuryDemo


