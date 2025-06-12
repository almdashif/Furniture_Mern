import { FaArrowRightLong } from "react-icons/fa6";
import '../DisplayContainer/displayContainer.scss';
const DisplayContainer = () => {
    return (
        <section id='DisplayContainer'>
            <div className="mainContainer">
                <div className="leftContainer">
                    <h3>Exquisite design combined with functionalities</h3>
                    <p>Our products are designed to be user-friendly and intuitive. We are constantly updating our products to provide the best user experience.</p>

                    <a className="contactExpert">
                        <div className="imagesContainer">
                            <img src="https://www.instyle.com/thmb/jWCixPiqDpA2LG_Hccw7kQzfZ9I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1176793854-2000-0d550bb61aa6414caaf9eafbe0b482a9.jpg" alt="" />
                            <img src="https://www.instyle.com/thmb/vjvZwycvEMliZk92EAJkSYIeRGE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/032916-celebs-without-insta-9-2000-e290b2b9174f42fe9d6476ef597c3d41.jpg" alt="" />
                            <img src="https://www.instyle.com/thmb/2rQNzHhxzx2bCUFRrUDqELROFh4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/032916-celebs-without-insta-7-2000-ae6c815b269c48a28ac9c7bc93ab6d4b.jpg" alt="" />
                        </div>
                        <span>Contact with our expert</span>
                    </a>

                    <a href="#" className="shopNowBtn">Shop Now</a>
                </div>
                <div className="rightContainer">

                    <div className="gridContainer">
                        <div className="card card1">
                            <div className="imageContainer">
                                <img src="https://media.designcafe.com/wp-content/uploads/2020/03/21012613/luxury-living-room-designs.jpg" alt="" />
                            </div>

                            <div className="itemDetails">
                                <h6>Wooden Chair</h6>
                                <p>$ 199</p>
                            </div>
                            <a className="forwardBtn"><FaArrowRightLong /></a>
                        </div>
                        <div className="card card2">
                            <div className="imageContainer">
                                <img src="https://media.designcafe.com/wp-content/uploads/2020/03/21012605/luxury-living-room-design-false-ceiling-lights.jpg" alt="" />
                            </div>

                            <div className="itemDetails">
                                <h6>Wooden Elite</h6>
                                <p>$ 399</p>
                            </div>
                            <a className="forwardBtn"><FaArrowRightLong /></a>
                        </div>
                        <div className="card card3">


                            <div className="itemDetails cardDetails">
                                <h6>25% OFF</h6>
                                <p>More Premium Items</p>
                            </div>
                            <a className="ExploreBtn">Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default DisplayContainer