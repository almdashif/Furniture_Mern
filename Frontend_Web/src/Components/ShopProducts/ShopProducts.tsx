import React, { useState } from 'react'
import '../ShopProducts/shopProducts.scss'
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { ImLoop } from "react-icons/im";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { productData } from '../../data/productData.js';
import { IoMdCart } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import Slider from 'rc-slider/lib/Slider';
// import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import DetailsComponent from '../DetailsComponent/DetailsComponent.tsx';
const ShopProducts = () => {
    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(1000);
    const minLimit = 0;
    const maxLimit = 1500;
    const navigate = useNavigate()

    const handleClick = (index) => {
        // navigate(`/${index}`);
    };

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value <= maxPrice - 50) setMinPrice(value); // Ensures min < max
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= minPrice + 50) setMaxPrice(value); // Ensures max > min
    };

    return (
        <>
            <section id='ShopProduct'>
                <div className="mainContainer">
                    <div className="headingContainer" >
                        <h5>Shop</h5>
                        <p>{`Home > Shop > Sofas `}</p>
                        <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/sofas-category-hero-image.webp" alt="" />
                    </div>

                    <div className="filterContainer">
                        {Array.from({ length: 6 }).map((el, index) => {
                            return (
                                <div className="filter">
                                    <div className="imgContainer">
                                        <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/armchairs-category-hero-image.webp" alt="" />
                                    </div>
                                    <div className="textContainer">
                                        <h6>Sofas</h6>
                                        <p>10 Products</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                    <div className="subMainContainer">
                        <div className="leftContainer">

                            <div className="filterPriceContainer">
                                <p>Filter by price</p>

                                <Slider
                                    range
                                    min={0}
                                    max={1500}
                                    value={[minPrice, maxPrice]}
                                    onChange={(value) => {
                                        setMinPrice(value[0]);
                                        setMaxPrice(value[1]);
                                    }}
                                    railStyle={{ backgroundColor: '#f0f0f0', height: '2px' }}
                                    trackStyle={{ backgroundColor: '#152520', height: '2px' }}
                                    className="slider"
                                />

                                <label>Price: <span>${minPrice} - ${maxPrice}</span></label>
                            </div>

                            <div className="filterByColor">
                                <p>Filter by color</p>
                                <div className="colorContainerParent">
                                    {Array.from({ length: 3 }).map((el, index) => {
                                        return (
                                            <div className='colorContainerSubParent'>
                                                <div className="colorContainer">
                                                    <div className="color" key={index}>
                                                        <div className="colorCircle"></div>
                                                    </div>
                                                    <p>Beige</p>
                                                </div>
                                                <div className="count">
                                                    <p>2</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="filterByMaterial">
                                <p>Filter by material</p>
                                <div className="materialParentContainer">
                                    {Array.from({ length: 2 }).map((el, index) => {
                                        return (
                                            <div className='materialSubParentContainer'>
                                                <div className="materialContainer">
                                                    <input type="checkbox" name="material" className='material' id="material" />
                                                    <p>Fabric</p>
                                                </div>
                                                <div className="count">
                                                    <p>2</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="filterByBrand">
                                <p>Filter by brand</p>
                                <div className="materialContainer">
                                    {Array.from({ length: 5 }).map((el, index) => {
                                        return (
                                            <div className="materialContainer">
                                                <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-asgardia.svg" alt="" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="bestSellingBrands">
                                <p>Best selling products</p>
                                <div className="bestSellingBrandsContainer">
                                    {Array.from({ length: 6 }).map((el, index) => {
                                        return (
                                            <div className="bestSellingProducts">
                                                <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/product-45.webp" alt="" />
                                                <div className="details">
                                                    <h6>Modern Sofa</h6>
                                                    <p>$1,200.00 <span>$1,350.00</span></p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                        <div className="rightContainer">
                            <div className="filterContainer">
                                <div className="topContainer">
                                    <div className="leftFilter">
                                        <p>Showing all 4 results</p>
                                    </div>
                                    <div className="rightFilter">
                                        <select name="orderby" className="orderby" aria-label="Shop order">
                                            <option value="menu_order" >Default sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by latest</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                        <FaAngleDown className="custom-arrow" />
                                    </div>
                                </div>
                                <div className="bottomContainer">
                                    <p className='active-filter'>Active Filters</p>
                                    <div className="activeFiltersContainer">
                                        <div className="activeFilters">
                                            <CiCircleRemove />
                                            <p>Reset Filter</p>
                                        </div>
                                        <div className="activeFilters">
                                            <CiCircleRemove />
                                            <p>Fabric</p>
                                        </div>
                                    </div>
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
                    </div>




                </div>
            </section>
            <DetailsComponent />
        </>
    )
}

export default ShopProducts