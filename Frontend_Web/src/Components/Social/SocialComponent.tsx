import React, { Component } from 'react'
import '../Social/socialComponent.scss'
import { IoBedSharp, IoCall, IoSearchOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { GoClock } from "react-icons/go";

export class SocialComponent extends Component {
    render() {
        return (
            <section id="SocialComponent">
                <div className="mainContainer">
                    <div className="leftContainer">
                        <div className="richText">
                            <h5>Get in touch with us</h5>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <ul>
                            <li>
                                <a href="#"><CiLocationOn /></a>
                                <div className="richText">
                                    <h5>Address:</h5>
                                    <p>Street Name: NY 36859</p>
                                </div>
                            </li>
                            <li>
                                <a href="#"><IoCall /></a>
                                <div className="richText">
                                    <h5>Phone:</h5>
                                    <p>9999-999-999</p>
                                </div>
                            </li>

                            <li>
                                <a href="#"><GoClock /></a>
                                <div className="richText">
                                    <h5>Opening hours:</h5>
                                    <p>Mon - Sun / 10am - 10PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default SocialComponent