import React from 'react'
import '../Navbar/navbar.scss'
import { IoBedSharp, IoSearchOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { ImLoop } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
const Navbar = ({ open, setOpen }) => {
    const navigate = useNavigate()

    const navigateCart = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
       navigate('/cart');
    }

    const handleToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setOpen(!open)
        if (!open) {
            document.body.style.overflow = "hidden"; // Disable background scroll
          } else {
            document.body.style.overflow = "auto"; // Enable background scroll
          }
    }
    return (
        <section id="Navbar">
            <div className="navContainer">
                <div className="mainSearchContainer">
                    <div className="contactContainer">
                        <a className="logoContainer">
                            <img src="../../../src/assets/images/furnitureLogo.jpg" alt="logo" style={{ width: '100%', height: '100%' }}/>
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
                            <li><a href="">Shop <FaAngleDown /></a>
                            <div className="subMenu">
                                <ul>
                                    <li><a href="">Sofas</a></li>
                                    <li><a href="">Chairs</a></li>
                                    <li><a href="">Tables</a></li>
                                    <li><a href="">Beds</a></li>
                                    <li><a href="">Cupboards</a></li>
                                </ul>
                            </div>
                            </li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="rightContainer">
                        <ul>
                            <li><a href="" className='navIcons'><IoPersonCircleOutline /></a></li>
                            <li><a href="" className='navIcons'><CiHeart /></a></li>
                            {/* <li><a href="" className='navIcons'><ImLoop /></a></li> */}
                            <li><a onClick={navigateCart} href="" className='navIcons '><FiShoppingBag /></a></li>
                            <li><a href="" onClick={handleToggle} className=' smallDev'><RxHamburgerMenu /></a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Navbar