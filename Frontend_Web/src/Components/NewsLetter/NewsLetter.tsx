import React, { Component } from 'react'
import '../NewsLetter/newsLetter.scss'

export class NewsLetter extends Component {
    render() {
        return (
            <section id="NewsLetter">
                <div className="mainContainer">
                    <div className="leftContainer">
                        <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/subscribe-section-image.webp" alt="" />
                        <div className="updatesContainer">
                            <h6>Important updates waiting for you!</h6>
                            <p>Subscribe and grab 20% OFF</p>
                        </div>


                    </div>
                    <div className="rightContainer">
                        <div className="feildsContainer">
                            <input type="text" placeholder="Your email *" />
                            <a href='#' type='submit'>Subscribe</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewsLetter