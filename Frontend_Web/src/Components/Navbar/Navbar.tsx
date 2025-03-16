import React, { useCallback, useContext } from 'react'
import '../Navbar/navbar.scss'
import { IoSearchOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { BsDoorOpen } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDown, FaRegHeart } from "react-icons/fa6";
import { GlobalContext } from '../../App.jsx';

const Navbar = ({ open, setOpen, isProfileOpen, setIsProfileOpen }) => {
    const navigate = useNavigate()


    const { state, dispatch } = useContext(GlobalContext)

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

    const handleProfileToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIsProfileOpen(!isProfileOpen)
        if (!isProfileOpen) {
            document.body.style.overflow = "hidden"; // Disable background scroll
        } else {
            document.body.style.overflow = "auto"; // Enable background scroll
        }
    }

    return (
        <section id="Navbar">
            <div className="navContainer">
                <div className="mainSearchContainer">
                    <div onClick={() => navigate('/')} className="contactContainer">
                        <a className="logoContainer">
                            {/* <img src="../../../src/assets/images/furnitureLogo.jpg" alt="logo" style={{ width: '100%', height: '100%' }} /> */}
                            <BsDoorOpen />
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
                                    <div style={{ height: '1rem', backgroundColor: "#fff", overflow: 'hidden', }}></div>
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
                            <li><a href="" onClick={handleProfileToggle} className='navIcons'><IoPersonCircleOutline /></a></li>
                            <li><a href="" className='navIcons'><FaRegHeart /></a></li>
                            {/* <li><a href="" className='navIcons'><ImLoop /></a></li> */}
                            {state.cart.length > 0 && <li><Link to="/cart" className='navIcons '>
                                <FiShoppingBag />
                                <div className="cartCount">
                                    <span>{state.cart.length}</span>
                                </div>
                            </Link></li>}
                            <li><a href="" onClick={handleToggle} className='navIcons smallDev'><RxHamburgerMenu /></a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Navbar