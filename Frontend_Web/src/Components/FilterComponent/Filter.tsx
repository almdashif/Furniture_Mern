import React from 'react'
import '../FilterComponent/filter.scss'
import { MdOutlineDoorSliding ,MdOutlineBed} from "react-icons/md";
import { LuSofa } from "react-icons/lu";
import { IoBedSharp, IoCall, IoSearchOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { GiWoodenChair } from "react-icons/gi";
import { PiArmchair } from "react-icons/pi";
const Filter = () => {
    return (
        <section id="filter">




            <div className="mainContainer">
                <div className="leftContainer">
                    <ul>
                        <li><a href="#"><GiWoodenChair /><span>Chairs</span></a></li>
                        <li><a href="#"><MdOutlineDoorSliding /><span>Storage</span></a></li>
                        <li><a href="#"><PiArmchair /><span>Armchairs</span></a></li>
                        <li><a href="#"><LuSofa /><span>Sofas</span></a></li>
                        <li><a href="#"><MdOutlineBed /><span>Beds</span></a></li>
                        <li><a href="#"><IoBedSharp /><span>Tables</span></a></li>
                        <li><a href="#"><IoBedSharp /><span>Decor</span></a></li>
                    </ul>
                </div>
                <div className="rightContainer">
                    <ul>
                        <li>
                            <a href="#"><CiLocationOn /></a>
                            <div className="richText">
                                <h5>Address:</h5>
                                <p>Street Name: NY 36859</p>
                            </div>
                        </li>
                        <li>
                            <a href="#"><IoCall /></a>
                            <div className="richText">
                                <h5>Phone:</h5>
                                <p>9999-999-999</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Filter