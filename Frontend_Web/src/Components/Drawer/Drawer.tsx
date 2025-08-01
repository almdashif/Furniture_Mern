import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";
import { LuRockingChair, LuSofa } from "react-icons/lu";
import { MdChairAlt, MdOutlineTableBar } from "react-icons/md";
import { PiArmchairBold, PiOfficeChair } from "react-icons/pi";
import { RiArrowDownSLine, RiWhatsappFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import "../Drawer/drawer.scss";

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
                            <li><a><span><a onClick={navigationTo('/shop')}>Shop </a><RiArrowDownSLine onClick={toggleShopTab} className={`${openShopTab ? 'rotate' : ""}`} /></span>
                                <ul className={`${openShopTab ? 'openShopTab' : ""}`}>
                                    <li><a onClick={navigationTo('/1')}>Variable Product</a></li>
                                    <li><a onClick={navigationTo('/2')}>Product Gallery</a></li>
                                    <li><a onClick={navigationTo('/3')}>Advanced Reviews</a></li>
                                    <li><a onClick={navigationTo('/4')}>Custom Tab</a></li>
                                    <li><a onClick={navigationTo('/5')}>Related Products - slider</a></li>
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
