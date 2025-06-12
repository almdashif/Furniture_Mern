import React, { useContext, useEffect, useState } from 'react';
import { CiBellOn } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

import { GlobalContext } from '../../App.jsx';
import '../Checkout/checkout.scss';




const Checkout = () => {



  const { state, dispatch } = useContext(GlobalContext)
  const [total, setTotal] = useState(0)

  // Define a type for cart items
  type CartItem = {
    id: string | number;
    name: string;
    productImage?: string;
    currentprice: number;
    cartQuantity: number;
    // add other properties as needed
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  useEffect(() => {
    if (state.cart && Array.isArray(state.cart)) {
      const total = state.cart.reduce((totalPrice: number, item: CartItem) => {
        return totalPrice + item.currentprice * item.cartQuantity;
      }, 0)
      setTotal(Number(total))
      console.log({ total })
    }
  }, [state.cart])


  const updateCartProductQuantity = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: CartItem, type: number) => {
    e.preventDefault();

    if (type === 0) {
      const filteredProduct = state.cart.find(item => item.id === data.id)
      if (!filteredProduct) return;
      if (filteredProduct.cartQuantity === 1) {
        dispatch({
          type: "cart",
          payload: state.cart.filter((item: CartItem) => item.id !== data.id),
        });
      } else {
        dispatch({
          type: "cart",
          payload: state.cart.map((item: CartItem) =>
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
        payload: state.cart.map((item: CartItem) =>
          item.id === data.id
            ? { ...item, cartQuantity: item.cartQuantity + type }
            : item
        ),
      });
    }
    else {
      dispatch({
        type: "cart",
        payload: state.cart.filter((item: CartItem) => item.id !== data.id),
      });
    }
  }

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
              <p className='addInfo'>Additional Information</p>
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
              {state.cart.map((val: CartItem, i: number) => {
                return (
                  <div key={i} className="product">
                    <div className="productDetails">
                      <div className="productImg">
                        <img src={val.productImage ? val.productImage : "https://img.freepik.com/free-psd/slipper-chair-isolated-transparent-background_191095-13677.jpg?t=st=1740894955~exp=1740898555~hmac=51d9ef249a11662e76fd8be1f59bc9d4f1861d00772ef9a44859c9706df9ddb0&w=1480"} alt="productImg" />
                      </div>
                      <div className="productName">
                        <p>{val.name}</p>
                        <div className="quantityContainer">
                          <a href="#" onClick={e => updateCartProductQuantity(e, val, 0)}>
                            <FiMinus />
                          </a>
                          <span>{val.cartQuantity}</span>
                          <a href="#" onClick={e => updateCartProductQuantity(e, val, 1)}>
                            <GoPlus />
                          </a>
                        </div>
                      </div>
                    </div>


                    <a className="subtotalContainer">
                      <span className="productItemPrice">${val.currentprice}</span>
                    </a>
                  </div>
                )
              })}

            </div>


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
