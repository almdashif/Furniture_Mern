import React, { Component } from 'react'
import { MdFullscreen } from "react-icons/md";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompare } from "react-icons/md";
import { MdPhotoSizeSelectLarge } from "react-icons/md";

import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook, FaYoutube, FaChair } from "react-icons/fa";
import { FaSquareXTwitter, FaArrowRightLong, FaCodeCompare } from "react-icons/fa6";

export class SinglePage extends Component {
  render() {
    return (
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

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repellat ratione doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente libero iure sit vitae quae, autem quas, commodi dolorem, id deleniti ducimus quaerat error minus sint maiores aut impedit inventore. id deleniti quam facere, magnam tenetur temporibus animi a tempora sit, voluptates distinctio, fugit at placeat velit accusamus!</p>

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
              <a href="#">Add to Cart</a>
            </div>


            <div className="itemOptions">
              <ul>
                <li><a href="#"><IoMdHeartEmpty /><span>Wishlist</span></a></li>
                <li><a href="#"><MdCompare /><span>Compare</span></a></li>
                <li><a href="#"><MdPhotoSizeSelectLarge /><span>Size Guide</span></a></li>
              </ul>
            </div>

            <div className="divider"></div>


            <img src="" alt="" className="brandImage" />
            <div className="divider"></div>

            <p className='category'>category: <span className='category-item'>storage</span></p>


            <div>
              <ul>
                <li><a href=""><FaFacebook /></a></li>
                <li><a href=""><FaSquareXTwitter /></a></li>
                <li><a href=""><AiFillInstagram /></a></li>
                <li><a href=""> <RiWhatsappFill /></a></li>
                <li><a href=""><FaYoutube /></a></li>
              </ul>

            </div>

          </div>
        </div>
      </section >
    )
  }
}

export default SinglePage
