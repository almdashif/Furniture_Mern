import React, { Component, useEffect, useState } from 'react'
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




const CartPage = () => {

      const navigate = useNavigate()
  
      const navigateCheckout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          e.preventDefault();
         navigate('/Checkout');
      }
  


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])




  return (
    <>
      <section id="CartPage">
        <div className="mainContainer">

          <div className="leftContainer">
            <div className="headingContainer">
              <h5 className='product'>Product</h5>
              <h5 className='quantity'>Quantity</h5>
              <h5>Subtotal</h5>
            </div>

            <div className="divider margin-divider"></div>
            <div className="productsList">
              {Array.from({ length: 3 }).map((val, i) => {
                return (
                  <div className="product">
                    <div className="productDetails">
                      <div className="productImg">
                        <img src="https://img.freepik.com/free-psd/slipper-chair-isolated-transparent-background_191095-13677.jpg?t=st=1740894955~exp=1740898555~hmac=51d9ef249a11662e76fd8be1f59bc9d4f1861d00772ef9a44859c9706df9ddb0&w=1480" alt="productImg" />
                      </div>
                      <div className="productName">
                        <p>Aliquam Blandit</p>
                        <p className="productItemPrice">$320.00</p>
                      </div>
                    </div>

                    <div className="quantityContainer">
                      <a href="#">
                        <FiMinus />
                      </a>
                      <span>1</span>
                      <a href="#">
                        <GoPlus />
                      </a>
                    </div>
                    <a className="subtotalContainer">
                      <span className="productItemPrice">$320.00</span>
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
              <span>$320</span>
            </div>
            <div className="divider"></div>
            <div className="total">
              <p>Total</p>
              <span>$320</span>
            </div>

            <div className="freeShippingContainer">
              <p>Add $1,680.00 more to get free shipping!</p>
              <progress value={30} max={100} color='pink' className='progressBar' />
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
