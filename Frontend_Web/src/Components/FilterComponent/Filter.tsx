import React, { useEffect, useState } from 'react'
import '../FilterComponent/filter.scss'
import { MdOutlineDoorSliding, MdOutlineBed, MdOutlineTableBar } from "react-icons/md";
import { LuSofa } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { GiWoodenChair } from "react-icons/gi";
import { PiArmchair } from "react-icons/pi";
import { SlGlobeAlt } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
const menuItems = [
    { name: "Chairs", icon: <GiWoodenChair /> ,},
    { name: "Storage", icon: <MdOutlineDoorSliding /> },
    { name: "Armchairs", icon: <PiArmchair /> },
    { name: "Sofas", icon: <LuSofa /> },
    { name: "Beds", icon: <MdOutlineBed /> },
    { name: "Tables", icon: <MdOutlineTableBar /> },
    { name: "Decor", icon: <SlGlobeAlt /> },
];




const Filter = () => {


    const [visibleItems, setVisibleItems] = useState(menuItems);
    const [dropdownItems, setDropdownItems] = useState([]);

    const navigate = useNavigate()
    const updateMenuItems = () => {
        if (window.innerWidth < 1300) {
            setVisibleItems(menuItems.slice(0, 5));
            setDropdownItems(menuItems.slice(5));

        } else {
            setVisibleItems(menuItems);
            setDropdownItems([]);
        }
    };

    useEffect(() => {
        updateMenuItems();
        window.addEventListener("resize", updateMenuItems);
        return () => window.removeEventListener("resize", updateMenuItems);
    }, []);

    const navigateTo = (path, params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        navigate(`${path}${queryString ? `?${queryString}` : ""}`);
    };


    return (
        <section id="filter">




            <div className="mainContainer">
                <div className="leftContainer">
                    <ul>
                        {visibleItems.map((item, index) => (
                            <li key={index}>
                                <a  onClick={() => navigateTo("/shop/filter", { category: item.name?.toLowerCase() })}>{item.icon} <span>{item.name}</span></a>
                            </li>
                        ))}

                        {dropdownItems &&

                            <li className={`${dropdownItems.length > 0 ? '' : 'displayNone'} moreContainer`}>
                                <a >More <span><RiArrowDropDownLine /></span></a>
                                <ul className='moreListContainer'>
                                    <div style={{ height: '1rem', backgroundColor: "#fff", overflow: 'hidden', }}></div>

                                    {dropdownItems.map((val, i) => (
                                        <li key={i}>
                                            <a >{val.icon} <span>{val.name}</span></a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        }

                        {/* {dropdownItems.map((item, index) => (
                            <li key={index} style={{backgroundColor:'red'}}>
                                <a >More <span><RiArrowDropDownLine /></span></a>
                            </li>
                        ))} */}


                    </ul>
                </div>
                <div className="rightContainer">
                    <ul>
                        <li>
                            <a ><CiLocationOn /></a>
                            <div className="richText">
                                <h5>Address:</h5>
                                <p>Street Name: NY 36859</p>
                            </div>
                        </li>
                        <li>
                            <a ><LuPhoneCall /></a>
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