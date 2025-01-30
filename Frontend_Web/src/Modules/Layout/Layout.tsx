import React, { useState } from 'react'
import TopCard from '../../Components/TopCard/TopCard.tsx'
import Navbar from '../../Components/Navbar/Navbar.tsx'
import Filter from '../../Components/FilterComponent/Filter.tsx'
import { Outlet } from 'react-router-dom'
import ClientsComponent from '../../Components/ClientsComponent/ClientsComponent.tsx'
import NewsLetter from '../../Components/NewsLetter/NewsLetter.tsx'
import SocialComponent from '../../Components/Social/SocialComponent.tsx'
import Footer from '../../Components/Footer/Footer.jsx'
import RightsandCopy from '../../Components/Footer/RightsandCopy.jsx'
import StickyFooter from '../../Components/Footer/StickyFooter.tsx'
import Drawer from '../../Components/Drawer/Drawer.tsx'

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <TopCard />
            <Navbar open={isOpen} setOpen={setIsOpen}/>
            {/* </div> */}
            <Filter />
            <Outlet />


            <ClientsComponent />
            <NewsLetter />
            <SocialComponent />
            <Footer />
            <RightsandCopy />
            <StickyFooter />
            <Drawer open={isOpen} setOpen={setIsOpen}/>
        </div>
    )
}

export default Layout