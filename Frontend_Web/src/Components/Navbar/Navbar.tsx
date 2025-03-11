import React from 'react'
import '../Navbar/navbar.scss'
import { IoBedSharp, IoSearchOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { ImLoop } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
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
                            <img src="../../../src/assets/images/furnitureLogo.jpg" alt="logo" style={{ width: '100%', height: '100%' }} />
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={'/shop'}>Shop <FaAngleDown /></Link>
                                <div className="subMenu">
                                    <ul>
                                        <li><Link to={'/1'}>Sofas</Link></li>
                                        <li><Link to={'/2'}>Chairs</Link></li>
                                        <li><Link to={'/3'}>Tables</Link></li>
                                        <li><Link to={'/4'}>Beds</Link></li>
                                        <li><Link to={'/5'}>Cupboards</Link></li>
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
                            <li><Link to="/cart" className='navIcons '><FiShoppingBag /></Link></li>
                            <li><a href="" onClick={handleToggle} className=' smallDev'><RxHamburgerMenu /></a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Navbar