import React, { Component } from 'react'
import '../ClientsComponent/clientsComponent.scss'
import { MdOutlineRemoveRedEye } from "react-icons/md";
interface ClientsComponentState {
    demoObject: { imgLink: string }[]
}

export class ClientsComponent extends Component<{}, ClientsComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            demoObject: [
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-goldline.svg',

                },
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-magnolia.svg',

                },
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-boltshift.svg',

                },
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-contrast.svg',

                },
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-asgardia.svg',

                },
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-komplex.svg',

                },

            ]
        };
    }

    render() {
        return (
            <section id='ClientComponent'>
                <div className="mainContainer">
                    {this.state.demoObject.map((val, i) => {
                        return (
                            <img src={val.imgLink} key={i} alt="" />

                        )
                    })}
                    {this.state.demoObject.map((val, i) => {
                        return (
                            <img src={val.imgLink} key={i} alt="" />

                        )
                    })}
                </div>
            </section>
        )
    }
}

export default ClientsComponent