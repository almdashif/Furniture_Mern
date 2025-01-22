import React from 'react'
import '../BestSeller/bestSeller.scss'
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { ImLoop } from "react-icons/im";
import { MdOutlineRemoveRedEye } from "react-icons/md";


const BestSeller = () => {
    return (
        <section id='BestSeller'>
            <div className="mainContainer">
                <div className="headingContainer">
                    <h5>Bestsellers of the week</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo quos incidunt praesentium sequi natus repudiandae assumenda? Vel eum mollitia natus.</p>

                </div>


                <div className="itemsContainer">
                    {Array.from({ length: 7 }).map((_, index) => {
                        return (
                            <div className="item" key={index}>

                                <div className="imageContainer">
                                    <img src="https://media.designcafe.com/wp-content/uploads/2020/03/21012613/luxury-living-room-designs.jpg" alt="" />
                                    <div className="filtersContainer">
                                        <a href=""><CiHeart /></a>
                                        <a href=""><ImLoop /></a>
                                        <a href=""><MdOutlineRemoveRedEye /></a>
                                    </div>
                                    {
                                        (index % 2 == 0 || index ==3) &&
                                        <span >Sale</span>
                                    }


                                </div>
                                <div className="detailsContainer">

                                    <div className="detailsHeadingContainer">
                                        <h6>Aliquam Blandit</h6>
                                        <p>Tables</p>
                                    </div>


                                    <div className="detailsBtnsContainer">
                                        <a href="#">$ {index * 320.00 + 1}</a>
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>

            </div>
        </section>
    )
}

export default BestSeller