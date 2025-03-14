import React, { useContext } from 'react'
import '../BestSeller/bestSeller.scss'
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { ImLoop } from "react-icons/im";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { productData } from '../../data/productData.js';
import { GlobalContext } from '../../App.jsx';




const BestSeller = () => {
    const navigate = useNavigate()
    const context = useContext(GlobalContext);
    const { state, dispatch } = context;

    const handleClick = (index) => {
        navigate(`/${index}`);
    };


    const addToCartFn = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: any) => {

        e.preventDefault();
        console.log(state.cart, 'add to cart')
        dispatch({ type: 'cart', payload: { ...data, cartQuantity: data.cartQuantity + 1 } })
    }


    return (
        <section id='BestSeller'>
            <div className="mainContainer">
                <div className="headingContainer">
                    <h5>Bestsellers of the week</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo quos incidunt praesentium sequi natus repudiandae assumenda? Vel eum mollitia natus.</p>

                </div>


                <div className="itemsContainer">
                    {productData.map((el, index) => {
                        return (
                            <div className="item" key={index}>

                                <div onClick={() => handleClick(el.id)} className="imageContainer">
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
                                        <a href="#" onClick={e => addToCartFn(e, el)}>Add to cart</a>
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