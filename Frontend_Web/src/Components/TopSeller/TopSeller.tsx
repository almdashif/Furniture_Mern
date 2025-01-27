import React from 'react'
import '../TopSeller/topSeller.scss'
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { ImLoop } from "react-icons/im";
import { MdOutlineRemoveRedEye } from "react-icons/md";


const TopSeller = () => {
    return (
        <section id='TopSeller'>
            <div className="mainContainer">
                <div className="headingContainer">
                    <h5>Top Selling Furnitures</h5>
                    <p> Totam nemo quos incidunt praesentium sequi natus repudiandae assumenda? Vel eum mollitia natus.</p>

                </div>


                <div className="itemsContainer">
                    {Array.from({ length: 4 }).map((_, index) => {
                        return (
                            <div className="item" key={index}>

                                <div className="imageContainer">
                                    <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/product-32-300x300.webp" alt="" />
                                    <div className="filtersContainer">
                                        <a href=""><CiHeart /></a>
                                        <a href=""><ImLoop /></a>
                                        <a href=""><MdOutlineRemoveRedEye /></a>
                                    </div>
                                    {
                                        (index % 2 != 0 ) &&
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

export default TopSeller