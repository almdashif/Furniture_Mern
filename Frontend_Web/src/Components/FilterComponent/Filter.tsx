import React from 'react'
import '../FilterComponent/filter.scss'
import { MdOutlineDoorSliding, MdOutlineBed, MdOutlineTableBar } from "react-icons/md";
import { LuSofa } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { GiWoodenChair } from "react-icons/gi";
import { PiArmchair } from "react-icons/pi";
import { SlGlobeAlt } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";

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
                        <li><a href="#"><MdOutlineTableBar /><span>Tables</span></a></li>
                        <li><a href="#"><SlGlobeAlt /><span>Decor</span></a></li>
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
                            <a href="#"><LuPhoneCall /></a>
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