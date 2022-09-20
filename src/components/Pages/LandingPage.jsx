import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import CreateAndShare from '../../assets/home/desktop/create-and-share.jpg'
import BeautifulStories from '../../assets/home/desktop/beautiful-stories.jpg'
import designedForEveryOne from '../../assets/home/desktop/designed-for-everyone.jpg'
const LandingPage = () => {
  return (
    <>
    <NavBar />
    <main className='block bg-black'>
      <Header 
       section="create-and-share"
       sectionStyle="flex-col-reverse md:flex-row"
       header="CREATE AND SHARE YOUR PHOTO STORIES."
       paragraph="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
       headerStyle="text-white tracking-widest max-w-[400px] mb-4"
       paragraphStyle="text-[#DFDFDF] mb-4"
       link="GET AN INVITE"
       imageUrl={CreateAndShare}
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
       link="VIEW THE STORIES"
       linkStyle="text-black"
       imageUrl={BeautifulStories}
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
       link="VIEW THE STORIES"
       linkStyle="text-black"
       imageUrl={designedForEveryOne}
       BlackArrow={true}
       />
       <section id='stories' className='stories-section'>

       </section>
    </main>
    </>
  )
}

export default LandingPage