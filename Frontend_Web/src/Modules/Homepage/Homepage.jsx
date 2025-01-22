import React from 'react'
import './homepage.css'
import TopCard from '../../Components/TopCard/TopCard.tsx'
import Navbar from '../../Components/Navbar/Navbar.tsx'
import Filter from '../../Components/FilterComponent/Filter.tsx'
import DisplayContainer from '../../Components/DisplayContainer/DisplayContainer.tsx'
import BestSeller from '../../Components/BestSeller/BestSeller.tsx'
import TopSeller from '../../Components/TopSeller/TopSeller.tsx'

const Homepage = () => {
  return (

    <div>
      <TopCard />
      <Navbar />
      <Filter />
      <DisplayContainer />
      <BestSeller />
      <TopSeller />
    </div>
  )
}

export default Homepage