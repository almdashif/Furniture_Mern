import React from 'react'
import '../Footer/footer.scss'
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook, FaYoutube, FaChair } from "react-icons/fa";
import { FaSquareXTwitter, FaArrowRightLong, FaCodeCompare } from "react-icons/fa6";



const RightsandCopy = () => {
    return (
        <section id='RightsandCopy'>
            <div className="RightsandCopyContainer">
                <p>&copy; 2025 MdAshif</p>

                <div className="socials">
                    <ul>
                        <li><a href=""><FaFacebook /></a></li>
                        <li><a href=""><FaSquareXTwitter /></a></li>
                        <li><a href=""><AiFillInstagram /></a></li>
                        <li><a href=""> <RiWhatsappFill /></a></li>
                        <li><a href=""><FaYoutube /></a></li>
                    </ul>
                </div>

                <div className="conditions">
                    <a href="">Terms & Conditions</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookie Policy</a>
                </div>
            </div>
        </section>
    )
}

export default RightsandCopy