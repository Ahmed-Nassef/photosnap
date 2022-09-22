import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import Story from '../UI/Story'
import Architecturals from '../../assets/stories/desktop/architecturals.jpg'
import FeaturesSection from '../Features/FeaturesSection'
import Footer from '../Footer/Footer'
import images from '../../constants/images'
import data from '../../constants/data'
const STORIES_DATA = [
  {
    title: "The Mountains",
    author: "by Benjamin Cruz",
    imageURL: images.mountain
  },
  {
    title: "Sunset cityscapes",
    author: "by John Applesseed",
    imageURL: images.cityScapes
  },
  {
    title: "18 Days Voyage",
    author: "by Alexie Barodin",
    imageURL: images.Voyage
  },
  {
    title: "Architecturals",
    author: "by Samantha Brooke",
    imageURL: images.Architecturals
  },
]
const features = [
  {
    image:images.responsive,
    title: "100% Responsive",
    description: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
  },
  {
    image:images.noLimit,
    title: "No Photo Upload Limit",
    description: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
  },
  {
    image:images.Embed,
    title: "Available to Embed",
    description: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
  }
]
const LandingPage = () => {
  console.log(data.FEATURES_DATA.length)
  return (
    <>
    <NavBar />
    <main className='block bg-white'>
      <Header 
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
       link="VIEW THE STORIES"
       linkStyle="text-black"
       imageUrl={images.designedForEveryOne}
       BlackArrow={true}
       />
       <section id='stories' className='relative  stories-section'>
        <div className='stories__wrapper'>
          <div className='stories__content relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          {STORIES_DATA.map((story)=>(
            <Story image={story.imageURL} author={story.author} title={story.title} />
            ))}
          </div>
        </div>
       </section>
       <FeaturesSection features={data.FEATURES_DATA.slice(0,3)} />
    </main>
    <Footer />
    </>
  )
}

export default LandingPage