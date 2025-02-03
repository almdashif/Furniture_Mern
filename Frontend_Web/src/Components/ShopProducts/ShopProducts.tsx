import React from 'react'
import '../ShopProducts/shopProducts.scss'
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { ImLoop } from "react-icons/im";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { productData } from '../../data/productData.js';
import { IoMdCart } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";

const ShopProducts = () => {

    const navigate = useNavigate()

    const handleClick = (index) => {
        // navigate(`/${index}`);
    };

    return (
        <section id='ShopProduct'>
            <div className="mainContainer">
                <div className="headingContainer">
                    <h5>Shop</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo quos incidunt praesentium sequi natus repudiandae assumenda? Vel eum mollitia natus.</p>



                </div>

                <div className="controllersContainer">
                    <div className="filterContainer">
                        <CiFilter />
                        <p>Filter</p>
                    </div>
                    <div className="sortContainer">
                        <BiSortAlt2 />
                    </div>

                </div>


                <div className="itemsContainer">
                    {productData.map((el, index) => {
                        return (
                            <a onClick={() => handleClick(el.id)} className="item" key={el.id}>

                                <div className="imageContainer">
                                    <img src={el.productImage} alt="" />
                                    <div className="filtersContainer">
                                        <a href=""><CiHeart /></a>
                                        <a href=""><ImLoop /></a>
                                        <a href=""><IoMdCart /></a>
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
                                        <p className='Offer-price'>${el?.currentprice} <span className='actual-price'>${el?.oldPrice}</span></p>
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

export default ShopProducts