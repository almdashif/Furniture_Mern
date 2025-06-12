import { Component } from 'react';
import '../DetailsComponent/detailsComponent.scss';

import { CiGift } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";

export class DetailsComponent extends Component {
    render() {
        return (
            <section id="DetailsComponent">
                <div className="mainContainer">

                        <div className="card">
                            <FaRegCreditCard />
                            <h5>Secure Payments</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quo.</p>
                        </div>
                        <div className="card">
                            <MdLocalShipping />
                            <h5>Free Shipping</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quo.</p>
                        </div>
                        <div className="card">
                            <CiGift />
                            <h5>Gifts & Sales</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quo.</p>
                        </div>
                        <div className="card">
                            <IoChatbubblesOutline />
                            <h5>24/7 Support</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quo.</p>
                        </div>

                </div>
            </section>
        )
    }
}

export default DetailsComponent