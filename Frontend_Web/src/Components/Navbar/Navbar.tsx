import React from 'react'
import '../Navbar/navbar.scss'
import { IoBedSharp, IoSearchOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { ImLoop } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import LogoImage from '../../assets/images/furnitureLogo.jpg'
const Navbar = () => {
    return (
        <section id="Navbar">
            <div className="navContainer">
                <div className="mainSearchContainer">
                    <div className="contactContainer">
                        <a className="logoContainer">
                            <IoBedSharp style={{ width: '100%', height: '100%' }} />
                        </a>
                        <span>Furniture</span>
                    </div>

                    <div className="searchContainer">
                        <input type="text" placeholder='search' />
                        <a href=""><IoSearchOutline /></a>
                    </div>
                </div>
                <div className="listContainer">
                    <div className="leftContainer">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="rightContainer">
                        <ul>
                            <li><a href="" className='navIcons'><IoPersonCircleOutline /></a></li>
                            <li><a href="" className=' smallDev'><CiHeart /></a></li>
                            <li><a href="" className='navIcons'><ImLoop /></a></li>
                            <li><a href="" className='navIcons'><FiShoppingBag /></a></li>
                            <li><a href="" className=' smallDev'><RxHamburgerMenu /></a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Navbar