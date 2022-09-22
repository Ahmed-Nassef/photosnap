import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import FeaturesSection from '../Features/FeaturesSection'
import Footer from '../Footer/Footer'
import images from '../../constants/images'
import StoriesContainer from '../Stories/StoriesContainer'
import data from '../../constants/data'
const LandingPage = () => {
  return (
    <>
    <NavBar />
    <main className='block bg-white'>
      <Header 
       linkExist={true}
       section="create-and-share"
       sectionStyle="flex-col-reverse md:flex-row"
       leftDivStyle="bg-black"
       header="CREATE AND SHARE YOUR PHOTO STORIES."
       paragraph="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
       headerStyle="text-white tracking-widest max-w-[400px] mb-4"
       paragraphStyle="text-[#DFDFDF] mb-4"
       link="GET AN INVITE"
       imageUrl={images.CreateAndShare}
       BlackArrow={false}
       isGradientShown={true}
       />
       <Header 
       section="beautiful-stories"
       sectionStyle="flex-col-reverse md:flex-row-reverse"
       header="BEAUTIFUL STORIES EVERY TIME"
       leftDivStyle="bg-white"
       paragraph="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
       headerStyle="tracking-widest max-w-[400px] mb-4 uppercase"
       paragraphStyle="text-[#DFDFDF] mb-4"
       linkExist={true}
       link="VIEW THE STORIES"
       linkStyle="text-black"
       imageUrl={images.BeautifulStories}
       BlackArrow={true}
       />
       <Header 
       section="create-and-share"
       sectionStyle="flex-col-reverse md:flex-row"
       header="DESIGNED FOR EVERYONE"
       leftDivStyle="bg-white"
       paragraph="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
       headerStyle="text-black tracking-widest mb-4"
       paragraphStyle="text-[#DFDFDF] mb-4"
       linkExist={true}
       link="VIEW THE STORIES"
       linkStyle="text-black"
       imageUrl={images.designedForEveryOne}
       BlackArrow={true}
       />
       <StoriesContainer isDateShown={false} stories={data.STORIES_DATA.slice(0,4)} />
       <FeaturesSection features={data.FEATURES_DATA.slice(0,3)} />
    </main>
    <Footer />
    </>
  )
}

export default LandingPage