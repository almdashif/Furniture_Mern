import React, { Component } from 'react'
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

interface SinglePageState {
  viewState: number;
  checked: boolean;
}

export class SinglePage extends Component<{}, SinglePageState> {

  state: SinglePageState = {
    viewState: 0,
    checked: false,
  }

  changeViewState = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, val: number) => {
    e.preventDefault();
    this.setState({ viewState: val })
  }


  handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ checked: e.target.checked });
  }


  render() {
    return (
      <>
        <section id="SinglePage">
          <div className="mainContainer">
            <div className="leftContainer">
              <div className="imageContainer">
                <a href="#" className='sale'>Sale</a>
                <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/product-30.webp" alt="" />
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

              <p className='Offer-price'>$200.00 <span className='actual-price'>$260.00</span></p>

              <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repellat ratione doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente libero iure sit vitae quae, autem quas, commodi dolorem, id deleniti ducimus quaerat error minus sint maiores aut impedit inventore. id deleniti quam facere, magnam tenetur temporibus animi a tempora sit, voluptates distinctio, fugit at placeat velit accusamus!</p>

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
                <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-goldline.svg" alt="" />
              </div>

              <div className="divider"></div>

              <p className='category'>category: <span className='category-item'>storage</span></p>




            </div>
          </div>


          <div className="moreInfoContainer">
            <div className="topContainer">
              <h6 className={this.state.viewState == 0 ? 'active' : 'inActive'}><a onClick={(e) => this.changeViewState(e, 0)} href="" >Description</a></h6>
              <h6 className={this.state.viewState == 1 ? 'active' : 'inActive'}><a onClick={(e) => this.changeViewState(e, 1)} href="">Additional Information</a></h6>
              <h6 className={this.state.viewState == 2 ? 'active' : 'inActive'}><a onClick={(e) => this.changeViewState(e, 2)} href="">Reviews (0)</a></h6>
            </div>
            <div className="bottomContainer">

              {this.state.viewState == 0 ?
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur autem, numquam, nam optio iste, rerum quisquam eius amet cum explicabo necessitatibus? <br /><br /> Dolor quae eum sed minima dolorem vel, repudiandae ipsa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium voluptatibus, assumenda itaque dolores necessitatibus rem libero mollitia reprehenderit repudiandae, deserunt vel voluptatum odit. Vel voluptatem totam cum labore voluptate! Illo. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempore perspiciatis numquam, velit nemo laudantium non impedit ipsam quam consequuntur est exercitationem repudiandae ab officia animi sit aperiam officiis itaque!</p>
                :
                this.state.viewState == 1 ?
                  <>
                    <table style={{ width: '100%', }}>
                      <tr>
                        <th>Color</th>
                        <td>Black, Brown</td>
                      </tr>
                      <tr>
                        <th>Material</th>
                        <td>Marble, Wood</td>
                      </tr>
                      <tr>
                        <th>Material</th>
                        <td>Marble, Wood</td>
                      </tr>
                    </table>

                  </>
                  :
                  <div id='reviewWrapper'>
                    <div className="leftReviewContainer">
                      <div className="reviewContainer">
                        <h4>Reviews</h4>
                        <p>There is no reviews yet.</p>
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
                            checked={this.state.checked}
                            onChange={this.handleCheckboxChange} />
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
}

export default SinglePage
