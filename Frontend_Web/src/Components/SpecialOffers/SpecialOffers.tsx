import { Component } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import '../SpecialOffers/specialOffers.scss';

interface State {
    "test": String
}
export class SpecialOffers extends Component<{}, State> {

    state: State = {
        "test": "test",
    };

    render() {
        return (
            <section id='SpecialOffers'>
                <div className="mainContainer">
                    <div className="headingContainer">
                        <div className="titleContainer">
                            <h5>Special Offers</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo quos incidunt praesentium sequi natus repudiandae assumenda? Vel eum mollitia natus.</p>
                        </div>

                        <a href="#">
                            <span>See All</span>
                            <FaArrowRightLong />
                        </a>


                    </div>


                    <div className="itemsContainer">
                        {Array.from({ length: 3 }).map((_, index) => {
                            return (
                                <div className={`item ${index === 0 ? 'bgLightGreen' : index === 1 ? "bgLightPeach" : "bgLightGray"}`} key={index}>

                                    <img
                                        src={index === 0 ?
                                            "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/offers-image-1.webp"
                                            :
                                            index === 1 ?
                                                "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/offers-image-3.webp"
                                                :
                                                "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/offers-image-2.webp"
                                        }
                                        alt=""
                                        className={index === 0 ? 'bgLightGreen' : index === 1 ? "bgLightPeach" : "bgLightPeach"}
                                    />

                                    <div className="detailsContainer">
                                        <div className="headingDetails">
                                            <h5>Special Discount</h5>
                                            <h6>30% off</h6>
                                        </div>

                                        <p>Autem omnis corporis repudiandae laudantium aperiam aliquid!</p>

                                        <a href="#">Browse Now</a>

                                    </div>


                                </div>
                            )
                        })}


                    </div>

                </div>
            </section>
        )
    }
}

export default SpecialOffers