import React, { Component, useContext, useEffect, useState } from 'react'
import { MdFullscreen } from "react-icons/md";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompare } from "react-icons/md";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { CgMathPlus } from "react-icons/cg";
import { PiStarBold, } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";

import '../Cart/cart.scss'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../App.jsx';




const CartPage = () => {

  const navigate = useNavigate()

  const { state, dispatch } = useContext(GlobalContext)
  const [total, setTotal] = useState(0)

  const navigateCheckout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/Checkout');
  }



  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

  }, [])

  useEffect(() => {
    let total = state.cart.reduce((totalPrice: number, item: any) => {
      return totalPrice + item.currentprice * item.cartQuantity;
    }, 0)
    setTotal(Number(total))

    console.log({total})

  }, [state.cart])


  const updateCartProductQuantity = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: any, type: number) => {
    e.preventDefault();

    if (type === 0) {
      const filteredProduct = state.cart.find(item => item.id === data.id)
      if (filteredProduct.cartQuantity === 1) {
        dispatch({
          type: "cart",
          payload: state.cart.filter((item: any) => item.id !== data.id),
        });
      } else {
        dispatch({
          type: "cart",
          payload: state.cart.map((item: any) =>
            item.id === data.id
              ? { ...item, cartQuantity: item.cartQuantity - 1 }
              : item
          ),
        });
      }

    }
    else if (type == 1) {
      dispatch({
        type: "cart",
        payload: state.cart.map((item: any) =>
          item.id === data.id
            ? { ...item, cartQuantity: item.cartQuantity + type }
            : item
        ),
      });
    }
    else {
      dispatch({
        type: "cart",
        payload: state.cart.filter((item: any) => item.id !== data.id),
      });
    }
  }


  return (
    <>
      <section id="CartPage">
        <div className="mainContainer">

          <div className="pageHeading">
            <h4>Cart</h4>
          </div>

          <div className="leftContainer">
            <div className="headingContainer">
              <h5 className='product'>Product</h5>
              <h5 className='quantity'>Quantity</h5>
              <h5 className='subtotal'>Subtotal</h5>
            </div>

            <div className="divider margin-divider"></div>
            <div className="productsList">
              {state.cart.map((val: any, i: number) => {
                return (
                  <div key={i} className="product">
                    <div className="productDetails">
                      <div className="productImg">
                        <img src={val.productImage ? val.productImage : "https://img.freepik.com/free-psd/slipper-chair-isolated-transparent-background_191095-13677.jpg?t=st=1740894955~exp=1740898555~hmac=51d9ef249a11662e76fd8be1f59bc9d4f1861d00772ef9a44859c9706df9ddb0&w=1480"} alt="productImg" />
                      </div>
                      <div className="productName">
                        <p>{val.name}</p>
                        <p className="productItemPrice">${val.currentprice}</p>
                      </div>
                    </div>

                    <div className="quantityContainer">
                      <a href="#" onClick={e => updateCartProductQuantity(e, val, 0)}>
                        <FiMinus />
                      </a>
                      <span>{val.cartQuantity}</span>
                      <a href="#" onClick={e => updateCartProductQuantity(e, val, 1)}>
                        <GoPlus />
                      </a>
                    </div>
                    <a className="subtotalContainer" onClick={e => updateCartProductQuantity(e, val, 2)}>
                      <span className="productItemPrice">${val.cartQuantity * val.currentprice}</span>
                      <a href=""><MdDeleteOutline /></a>
                    </a>
                  </div>
                )
              })}

            </div>

            <div className="couponContainer">
              <input type="text" placeholder='Coupon Code' name="couponCode" id="couponCode" className='couponCode' />
              <a href="#" className="couponBtn">Apply Coupon</a>
            </div>
          </div>
          <div className="rightContainer">
            <h5>Cart Totals</h5>
            <div className="subTotal">
              <p>Subtotal</p>
              <span>${total}</span>
            </div>
            <div className="divider"></div>
            <div className="total">
              <p>Total</p>
              <span>${total}</span>
            </div>

            <div className="freeShippingContainer">
             {total <= 2000 ? <p>Add ${2000 - total} more to get free shipping!</p>
             :
               <p>Hooray! you availed free shipping 🎉.</p>
             }
              <progress value={total} max={2000} color='pink' className='progressBar' />
            </div>
            <a href="#" onClick={navigateCheckout} className="checkoutBtn">
              Proceed to checkout
            </a>
          </div>
        </div>

      </section >

    </>
  )

}

export default CartPage
