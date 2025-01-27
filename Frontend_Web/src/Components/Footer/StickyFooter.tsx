import React, { Component } from 'react'
import '../Footer/footer.scss'
import { ImLoop } from "react-icons/im";

export class StickyFooter extends Component {
    render() {
        return (
            <section id='StickyFooter'>
                <div className="StickyFooterContainer">
                    <div className="imgContainer">
                        <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/subscribe-section-image.webp" alt="" />
                    </div>

                    <div className="btnContainer">
                        <ImLoop />
                        <a href='#' type='submit'>Compare</a>
                    </div>

                </div>
            </section>
        )
    }
}

export default StickyFooter