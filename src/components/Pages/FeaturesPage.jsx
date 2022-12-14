import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import images from '../../constants/images'
import FeaturesSection from '../Features/FeaturesSection'
import data from '../../constants/data'
import SubHeader from '../UI/SubHeader'
const FeaturesPage = () => {
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
       imageUrl={images.hero}
      />
      <FeaturesSection featuresStyle="grid grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" features={data.FEATURES_DATA} />
      <SubHeader image={images.bgBeta} SubHeaderTitle="features-subHeader" />
      <Footer />
    </>
  )
}

export default FeaturesPage