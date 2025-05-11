import React from 'react'
import '../TopSeller/topSeller.scss'
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { ImLoop } from "react-icons/im";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { productData } from '../../data/productData.js';
import { useNavigate } from 'react-router-dom';


const TopSeller = () => {

    const navigate = useNavigate()

    const handleClick = (index) => {
        navigate(`/${index}`);
    };


    return (
        <section id='TopSeller'>
            <div className="mainContainer">
                <div className="headingContainer">
                    <h5>Top Selling Furnitures</h5>
                    <p> Totam nemo quos incidunt praesentium sequi natus repudiandae assumenda? Vel eum mollitia natus.</p>

                </div>


                <div className="itemsContainer">
                    {productData.map((el, index) => {
                        return (
                            <a onClick={() => handleClick(el.id)} className="item" key={index}>

                                <div className="imageContainer">
                                    <img src={el.productImage} alt="" />
                                    <div className="filtersContainer">
                                        <a href=""><CiHeart /></a>
                                        <a href=""><ImLoop /></a>
                                        <a href=""><MdOutlineRemoveRedEye /></a>
                                    </div>
                                    {
                                        el.isSale &&
                                        <span >Sale</span>
                                    }



                                </div>
                                <div className="detailsContainer">

                                    <div className="detailsHeadingContainer">
                                        <h6>{el.name}</h6>
                                        <p>{el.category}</p>
                                    </div>


                                    <div className="detailsBtnsContainer">
                                        <a href="#">$ {el.currentprice}</a>
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </a>
                        )
                    })}


                </div>

            </div>
        </section>
    )
}

export default TopSeller