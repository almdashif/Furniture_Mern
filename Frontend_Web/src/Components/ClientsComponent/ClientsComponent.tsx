import { Component } from 'react';
import '../ClientsComponent/clientsComponent.scss';

interface ClientsComponentState {
    demoObject: { imgLink: string; name: string }[]
}

export class ClientsComponent extends Component<{}, ClientsComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            demoObject: [
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-goldline.svg',
                    name: 'Goldline'
                },
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-magnolia.svg',
                    name: 'Magnolia'
                },
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-boltshift.svg',
                    name: 'Boltshift'
                },
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-contrast.svg',
                    name: 'Contrast'
                },
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-asgardia.svg',
                    name: 'Asgardia'
                },
                {
                    imgLink: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-komplex.svg',
                    name: 'Komplex'
                }
            ]
        };
    }

    render() {
        // Create multiple sets of brands for seamless infinite loop
        const originalBrands = this.state.demoObject;
        const duplicatedBrands = [...originalBrands, ...originalBrands, ...originalBrands, ...originalBrands];

        return (
            <section id='ClientComponent'>
                <div className="brands-container">
                    <div className="brands-track">
                        {duplicatedBrands.map((brand, i) => (
                            <div key={`brand-${i}`} className="brand-item">
                                <img src={brand.imgLink} alt={brand.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default ClientsComponent