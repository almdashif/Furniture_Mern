import React from 'react'
import './homepage.scss'
import DisplayContainer from '../../Components/DisplayContainer/DisplayContainer.tsx'
import BestSeller from '../../Components/BestSeller/BestSeller.tsx'
import TopSeller from '../../Components/TopSeller/TopSeller.tsx'
import SpecialOffers from '../../Components/SpecialOffers/SpecialOffers.tsx'
import LuxuryDemo from '../../Components/LuxuryDemo/LuxuryDemo.tsx'


const Homepage = () => {


  return (

    <>
      <DisplayContainer />
      <BestSeller />
      <TopSeller />
      <SpecialOffers />
      <LuxuryDemo />


    </>
  )
}

export default Homepage