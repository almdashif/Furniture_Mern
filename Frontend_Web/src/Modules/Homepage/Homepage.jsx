import React from 'react'
import './homepage.scss'
import TopCard from '../../Components/TopCard/TopCard.tsx'
import Navbar from '../../Components/Navbar/Navbar.tsx'
import Filter from '../../Components/FilterComponent/Filter.tsx'
import DisplayContainer from '../../Components/DisplayContainer/DisplayContainer.tsx'
import BestSeller from '../../Components/BestSeller/BestSeller.tsx'
import TopSeller from '../../Components/TopSeller/TopSeller.tsx'
import SpecialOffers from '../../Components/SpecialOffers/SpecialOffers.tsx'
import LuxuryDemo from '../../Components/LuxuryDemo/LuxuryDemo.tsx'
import ClientsComponent from '../../Components/ClientsComponent/ClientsComponent.tsx'
import NewsLetter from '../../Components/NewsLetter/NewsLetter.tsx'
import SocialComponent from '../../Components/Social/SocialComponent.tsx'
import Footer from '../../Components/Footer/Footer.jsx'
import RightsandCopy from '../../Components/Footer/RightsandCopy.jsx'
import StickyFooter from '../../Components/Footer/StickyFooter.tsx'

const Homepage = () => {
  return (

    <>
      {/* <div style={{ position: "fixed", top: 0, left: 0, width: "100%",zIndex:99999999 }}> */}
      <TopCard />
      <Navbar />
      {/* </div> */}
      <Filter />
      <DisplayContainer />
      <BestSeller />
      <TopSeller />
      <SpecialOffers />
      <LuxuryDemo />
      <ClientsComponent />
      <NewsLetter />
      <SocialComponent />
      <Footer />
      <RightsandCopy />
      <StickyFooter />
    </>
  )
}

export default Homepage