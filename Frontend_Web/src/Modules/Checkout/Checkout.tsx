import React, { Component, useEffect, useState } from 'react'
import { MdFullscreen } from "react-icons/md";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";

import '../Checkout/checkout.scss'




const Checkout = () => {


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])




  return (
    <>
      <section id="Checkout">
        <div className="checkoutHeading">
          <h4>Checkout</h4>
        </div>
        <div className="mainContainer">

          <div className="leftContainer">


            <div className="billingHeading">
              <p>Billing details</p>
            </div>

            <form action="">
              <div className="formGroup firstName">
                <label htmlFor="firstName">First Name <span>*</span></label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="formGroup lastName">
                <label htmlFor="lastName">Last Name <span>*</span></label>
                <input type="text" id="lastName" name="lastName" />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email <span>*</span></label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="formGroup">
                <label htmlFor="phone">Phone <span>*</span></label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="formGroup">
                <label htmlFor="address">Address <span>*</span></label>
                <input type="text" id="address" name="address" />
              </div>
              <div className="formGroup">
                <label htmlFor="pincode">Pincode <span>*</span></label>
                <input type="text" id="pincode" name="pincode" />
              </div>
              <p  className='addInfo'>Additional Information</p>
              <div className="formGroup">
                <label htmlFor="notes">Order notes(optional)</label>
                <textarea placeholder='Notes about your order, e.g. special notes for delivery.' id="notes" name="notes" />
              </div>
            </form>

          </div>
          <div className="rightContainer">
            <h5>Your order</h5>


            <div className="headingContainer">
              <h5>Product</h5>
              <h5>Subtotal</h5>
            </div>
            <div className="divider"></div>

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
                        <div className="quantityContainer">
                          <a href="#">
                            <FiMinus />
                          </a>
                          <span>1</span>
                          <a href="#">
                            <GoPlus />
                          </a>
                        </div>
                      </div>
                    </div>


                    <a className="subtotalContainer">
                      <span className="productItemPrice">$320.00</span>
                    </a>
                  </div>
                )
              })}

            </div>


            <div className="subTotal">
              <p>Subtotal</p>
              <span>$320.00</span>
            </div>
            <div className="divider"></div>
            <div className="total">
              <p>Total</p>
              <span>$320.00</span>
            </div>

            <div className="freeShippingContainer">
              <p>Add $1,680.00 more to get free shipping!</p>
              <progress value={30} max={100} color='pink' className='progressBar' />
            </div>

            <div className="paymentOptions">
              <a href=""><CiBellOn /></a>
              <p>Sorry,it seems that there are no available payment methods.<br />
                please contact us if you require assistance or wish to make alternative arrangements.
              </p>
            </div>

            <div className="privacyDesc">
              <p>Your personal data will be used to process your order, support your experience throughtout this website, and for other purposes described in our
                <a href="">privacy policy</a>.
              </p>

            </div>

            <a href="#" className="checkoutBtn">
              Place order
            </a>
          </div>
        </div>

      </section >

    </>
  )

}

export default Checkout
