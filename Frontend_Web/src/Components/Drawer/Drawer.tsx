import React, { useState } from "react";
import "../Drawer/drawer.scss";
import { IoBedSharp, IoSearchOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { ImLoop } from "react-icons/im";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { PiArmchairFill } from "react-icons/pi";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook, FaYoutube, FaChair } from "react-icons/fa";
import { FaSquareXTwitter, FaArrowRightLong, FaCodeCompare } from "react-icons/fa6";
import { MdChairAlt } from "react-icons/md";
import { PiArmchairBold, PiOfficeChair } from "react-icons/pi";
import { LuRockingChair } from "react-icons/lu";
import { LuSofa } from "react-icons/lu";
import { BiBed } from "react-icons/bi";
import { MdOutlineTableBar } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Drawer = ({ open, setOpen }) => {

    const [openShopTab, setOpenShopTab] = useState(false)
    const navigate = useNavigate()
    // Toggle the drawer
    const toggleDrawer = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpen(!open);
        if (!open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    const toggleShopTab = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpenShopTab(!openShopTab);

    };

    const navigateToShop = (e: React.MouseEvent) => {
        toggleDrawer(e);
        navigate(`/shop`);
    }

    const navigationTo = (path:string) => (e: React.MouseEvent) => {
        toggleDrawer(e);
        navigate(`${path}`);
      };

    return (
        <div>

            <div className={`drawer ${open ? "open" : ""}`}>

                <section id="Drawer">
                    <a className="closeBtn" onClick={toggleDrawer}>
                        <RxCross2 />
                    </a>

                    <div className="contactContainer">
                        <a><IoBedSharp style={{ width: '100%', height: '100%' }} /></a>
                        <span>Furniture</span>
                    </div>

                    <div className="pagesContainer">
                        <ul>
                            <li><a onClick={navigationTo('/')}>Home</a></li>
                            <li><a href="" onClick={toggleShopTab}><span>Shop <RiArrowDownSLine className={`${openShopTab ? 'rotate' : ""}`} /></span>
                                <ul className={`${openShopTab ? 'openShopTab' : ""}`}>
                                    <li><a href="" onClick={navigateToShop}>Variable Product</a></li>
                                    <li><a href="">Product Gallery</a></li>
                                    <li><a href="">Advanced Reviews</a></li>
                                    <li><a href="">Custom Tab</a></li>
                                    <li><a href="">Related Products - slider</a></li>
                                </ul>
                            </a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="divider"></div>

                    <div className="itemsContainer">
                        <ul>
                            <li><a href="#"><MdChairAlt /><span>Chairs</span></a></li>
                            <li><a href="#"><LuRockingChair /><span>Storage</span></a></li>
                            <li><a href="#"><PiArmchairBold /><span>Armchairs</span></a></li>
                            <li><a href="#"><LuSofa /><span>Sofas</span></a></li>
                            <li><a href="#"><BiBed /><span>Beds</span></a></li>
                            <li><a href="#"><MdOutlineTableBar /><span>Tables</span></a></li>
                            <li><a href="#"><PiOfficeChair /><span>Decor</span></a></li>
                        </ul>

                    </div>

                    <div className="socialContainer">
                        <ul>
                            <li><a href=""><FaFacebook /></a></li>
                            <li><a href=""><FaSquareXTwitter /></a></li>
                            <li><a href=""><AiFillInstagram /></a></li>
                            <li><a href=""> <RiWhatsappFill /></a></li>
                            <li><a href=""><FaYoutube /></a></li>
                        </ul>

                    </div>


                </section>
            </div>

            {/* Overlay */}
            {open && <div className="overlay" onClick={toggleDrawer}></div>}
        </div>
    );
};

export default Drawer;
