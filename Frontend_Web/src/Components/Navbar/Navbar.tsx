import React, { useContext } from 'react';
import { BsDoorOpen } from "react-icons/bs";
import { FaAngleDown, FaRegHeart } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { IoPersonCircleOutline, IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../App.jsx';
import '../Navbar/navbar.scss';

interface NavbarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    isProfileOpen: boolean;
    setIsProfileOpen: (isProfileOpen: boolean) => void;
}

const Navbar = ({ open, setOpen, isProfileOpen, setIsProfileOpen }: NavbarProps) => {
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
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }

    const handleProfileToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIsProfileOpen(!isProfileOpen)
        if (!isProfileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
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
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>
                    <div className="rightContainer">
                        <ul>
                            <li><Link to="/login" className='navIcons'><IoPersonCircleOutline /></Link></li>
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