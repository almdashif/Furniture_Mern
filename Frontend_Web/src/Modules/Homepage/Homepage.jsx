import BestSeller from '../../Components/BestSeller/BestSeller.tsx'
import DisplayContainer from '../../Components/DisplayContainer/DisplayContainer.tsx'
import LuxuryDemo from '../../Components/LuxuryDemo/LuxuryDemo.tsx'
import SpecialOffers from '../../Components/SpecialOffers/SpecialOffers.tsx'
import TopSeller from '../../Components/TopSeller/TopSeller.tsx'
import './homepage.scss'


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