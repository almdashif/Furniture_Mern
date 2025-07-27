import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import '../TopCard/topcard.scss';

const TopCard = () => {
    return (
        <section id='topCard'>
            <div className="mainContainer">
                <div className="leftContainer">
                    <ul>
                        <li><a href="">Showrooms</a></li>
                        <li><a href="">Custom Work</a></li>
                        <li><a href="">Gift Cards</a></li>
                    </ul>
                </div>
                <div className="rightContainer">
                    <ul>
                        <li><a href=""><FaFacebook /></a></li>
                        <li><a href=""><FaSquareXTwitter /></a></li>
                        <li><a href=""><AiFillInstagram /></a></li>
                        <li><a href=""> <RiWhatsappFill /></a></li>
                        <li><a href=""><FaYoutube /></a></li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default TopCard