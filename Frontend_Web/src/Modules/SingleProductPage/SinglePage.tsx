import React, { Component, useEffect, useState } from 'react'
import { MdFullscreen } from "react-icons/md";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompare } from "react-icons/md";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { CgMathPlus } from "react-icons/cg";
import { PiStarBold, PiStarFill } from "react-icons/pi";

import '../SingleProductPage/singlePage.scss'
import DetailsComponent from '../../Components/DetailsComponent/DetailsComponent.tsx';
import { productData } from '../../data/productData.js';
import { useParams } from 'react-router-dom';






const SinglePage = () => {

  const [viewState, setViewState] = useState(0)
  const [checked, setChecked] = useState(false)
  const [singleData, setSingleData] = useState([])

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchSingleData()
    // this.setState()
    // window.position({ top: 0,})
    window.scrollTo({ top: 0, left: 0 })
  }, [])


  const changeViewState = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, val: number) => {
    e.preventDefault();
    setViewState(val)
  }

  const fetchSingleData = async () => {
    let singleProd = await productData.find(p => p.id === Number(id))
    setSingleData([singleProd])
    console.log([singleProd], 'singleProd')
  }


  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  // const { id } = this.props.match.params;
  return (
    <>
      <section id="SinglePage">
        <div className="mainContainer">
          <div className="leftContainer">
            <div className="imageContainer">
              {singleData[0]?.isSale && <a href="#" className='sale'>Sale</a>}
              <img src={singleData[0]?.productImage ? singleData[0]?.productImage : "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/product-30.webp"} alt="" />
              <a className="fullScreen"><MdFullscreen /></a>
            </div>
          </div>
          <div className="rightContainer">

            <div className="trackerContainer">
              <span>Home</span>
              <IoChevronForwardOutline />
              <span>Shop</span>
              <IoChevronForwardOutline />
              <span>Storage</span>
              <IoChevronForwardOutline />
              <span>Sem Integer</span>
            </div>

            <h4>Sem Intiger</h4>

            <p className='Offer-price'>${singleData[0]?.currentprice} <span className='actual-price'>${singleData[0]?.oldPrice}</span></p>

            <p className='description'>{singleData[0]?.productDetails + singleData[0]?.productDetails+singleData[0]?.productDetails+singleData[0]?.productDetails + singleData[0]?.productDetails}</p>

            <div className="divider"></div>

            <div className="cartBtns">
              <div className="noOfItemBtn">
                <a href="#">
                  <FiMinus />
                </a>
                <span>1</span>
                <a href="#">
                  <GoPlus />
                </a>
              </div>
              <a href="#" className='addtoCartBtn'>Add to Cart</a>
            </div>


            {/* <a href="#" className='viewCartBtn'>View Cart</a> */}


            <div className="itemOptions">
              <ul>
                <li><a href="#"><IoMdHeartEmpty /><span>Wishlist</span></a></li>
                <li><a href="#"><MdCompare /><span>Compare</span></a></li>
                <li><a href="#"><MdPhotoSizeSelectLarge /><span>Size Guide</span></a></li>
              </ul>
            </div>

            <div className="divider"></div>

            <div className="brandImage">
              <img src={singleData[0]?.brandImg ? singleData[0]?.brandImg : "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-goldline.svg"} alt="" />
            </div>

            <div className="divider"></div>

            <p className='category'>category: <span className='category-item'>{singleData[0]?.category}</span></p>




          </div>
        </div>


        <div className="moreInfoContainer">
          <div className="topContainer">
            <h6 className={viewState == 0 ? 'active' : 'inActive'}><a onClick={(e) => changeViewState(e, 0)} href="" >Description</a></h6>
            <h6 className={viewState == 1 ? 'active' : 'inActive'}><a onClick={(e) => changeViewState(e, 1)} href="">Additional Information</a></h6>
            <h6 className={viewState == 2 ? 'active' : 'inActive'}><a onClick={(e) => changeViewState(e, 2)} href="">Reviews (0)</a></h6>
          </div>
          <div className="bottomContainer">

            {viewState == 0 ?
              <p>{singleData[0]?.productDescription}</p>
              :
              viewState == 1 ?
                <>
                  <table style={{ width: '100%', }}>
                    {singleData[0]?.information &&
                      singleData[0]?.information.map((el, i) => {
                        return (
                          <tr>
                            <th>{el.heading}</th>
                            <td>{el.body}</td>
                          </tr>
                        )
                      })
                    }

                  </table>

                </>
                :
                <div id='reviewWrapper'>
                  <div className="leftReviewContainer">
                    <div className="reviewContainer">
                      {singleData[0].reviews.length == 0 ? <>
                        <h4>Reviews</h4>
                        <p>There is no reviews yet.</p>
                      </>
                        :
                        <>
                          <h4>Reviews</h4>
                          {singleData[0].reviews.map((el, i) => {
                            return (
                              <div>
                                <h6>{el.title}</h6>
                                <p>{el.details}</p>
                              </div>
                            )
                          })}

                        </>

                      }
                    </div>

                  </div>

                  <div className="rightReviewContainer">

                    <div className="submitReviewContainer">
                      <h5>Be the first to review "Sem Integer"</h5>
                      <p>Your email address will not be published. Required feilds are marked <span className="star">*</span></p>
                    </div>


                    <div className="ratingContainer">
                      <p>your Rating <span className="star">*</span></p>
                      <div className="ratingStarContainer">
                        {Array.from({ length: 5 }).map((val, i) => <a href="" className='selectStar'><PiStarBold /></a>)}
                      </div>
                    </div>

                    <form action="">
                      <input type="text" name="name" placeholder="Name *" />
                      <input type="text" name="email" placeholder="Email *" />
                      <input type="text" name="title" placeholder="Review Title" />
                      <textarea name="review" placeholder='Your review *' id="" onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
                        onBlur={(e) => e.target.style.borderColor = '#ccc'}></textarea>


                      <div className='uploadImage'>
                        <p>Upload Image (Optional)</p>
                        <input
                          type="file"
                          accept="image/*"
                          id="image-upload"
                          style={{ display: 'none' }}
                        />

                        <label htmlFor="image-upload"><CgMathPlus /></label>

                      </div>

                      <div className="checkboxContainer">
                        <input type="checkbox" name="checkbox" id="checkbox" className="custom-checkbox"
                          checked={checked}
                          onChange={handleCheckboxChange} />
                        <label htmlFor="checkbox" className="checkbox-label"> Save my name, email, and website in this browser for the next time I comment.</label>

                      </div>

                      <input type="button" value="Submit" className='formSubmitBtn' />
                    </form>
                  </div>

                </div>
            }

          </div>
        </div>


      </section >

      <DetailsComponent />
    </>
  )

}

export default SinglePage
