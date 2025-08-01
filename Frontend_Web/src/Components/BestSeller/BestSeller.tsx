import React, { useContext } from 'react';
import { CiHeart } from "react-icons/ci";
import { ImLoop } from "react-icons/im";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../App.jsx';
import { productData } from '../../data/productData.js';
import '../BestSeller/bestSeller.scss';

const BestSeller = () => {
    const navigate = useNavigate()
    const context = useContext(GlobalContext);
    const { state, dispatch } = context;

    const handleClick = (index) => {
        navigate(`/${index}`);
    };

    interface Product {
        id: number;
        name: string;
        category: string;
        productImage: string;
        currentprice: number;
        isSale?: boolean;
        [key: string]: any;
    }

    const addToCartFn = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: Product) => {
        e.preventDefault();
        console.log({ data }, state.cart, 'state.cart')

        const existingProduct = state.cart.find((item: any) => item.id === data.id);

        if (existingProduct) {
            dispatch({
                type: "cart",
                payload: state.cart.map((item: any) =>
                    item.id === data.id
                        ? { ...item, cartQuantity: item.cartQuantity + 1 }
                        : item
                ),
            });
        } else {
            dispatch({
                type: "cart",
                payload: [...state.cart, { ...data, cartQuantity: 1 }],
            });
        }
    };
    const addToWishlistFn = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: Product) => {
        e.preventDefault();
        dispatch({
            type: "wishlist",
            payload: [...state.wishlist, data],
        });
    };


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
                                        <a href="#" onClick={e => { e.preventDefault(); e.stopPropagation(); addToWishlistFn(e, el); }}><CiHeart /></a>
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
                                        <a href="#" onClick={e => { e.preventDefault(); e.stopPropagation(); addToCartFn(e, el); }}>Add to cart</a>
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