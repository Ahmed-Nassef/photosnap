import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import images from '../../constants/images'
import Header from '../Header/Header'
import SubHeader from '../UI/SubHeader'
import PricesContainer from '../Pricing/PricesContainer'
import CompareSection from '../Pricing/CompareSection'
const PricingPage = () => {
  return (
    <>
      <NavBar />
      <Header
        section="feature-header"
        sectionStyle="md:min-h-[450px]"
        leftDivStyle="bg-black"
        header="FEATURES"
        headerStyle="text-white tracking-wider mb-4"
        paragraph="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        paragraphStyle="text-[#DFDFDF] mb-4 opacity-50"
       link="GET AN INVITE"
       LinkShown={false}
       isGradientShown={true}
       imageUrl={images.pricingHero}
      />
      <PricesContainer />
      {/* compare section */}
      <CompareSection />
      <SubHeader image={images.bgBeta} SubHeaderTitle="pricing-subHeader" />
      <Footer />
    </>
  )
}

export default PricingPage