import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook, FaYoutube, FaChair } from "react-icons/fa";
import { FaSquareXTwitter, FaArrowRightLong, FaCodeCompare } from "react-icons/fa6";
import { PiArmchairFill } from "react-icons/pi";
import { IoBedSharp, IoCall, IoSearchOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { ImLoop } from "react-icons/im";
import { MdCompareArrows } from "react-icons/md";
import '../TopCard/topcard.scss'

const TopCard = () => {
    return (
        <section id='topCard'>
            <div className="mainContainer">
                <div className="leftContainer">
                    <ul>
                        <li><a href="">Showrooms</a></li>
                        <li><a href="">Custom Work</a></li>
                        <li><a href="">Gift Cards</a></li>
                    </ul>
                </div>
                <div className="rightContainer">
                    <ul>
                        <li><a href=""><FaFacebook /></a></li>
                        <li><a href=""><FaSquareXTwitter /></a></li>
                        <li><a href=""><AiFillInstagram /></a></li>
                        <li><a href=""> <RiWhatsappFill /></a></li>
                        <li><a href=""><FaYoutube /></a></li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default TopCard