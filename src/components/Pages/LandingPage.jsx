import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import CreateAndShare from '../../assets/home/desktop/create-and-share.jpg'
import BeautifulStories from '../../assets/home/desktop/beautiful-stories.jpg'
import designedForEveryOne from '../../assets/home/desktop/designed-for-everyone.jpg'
import Story from '../UI/Story'
import mountain from '../../assets/stories/desktop/mountains.jpg'
import cityScapes from '../../assets/stories/desktop/cityscapes.jpg'
import Voyage from '../../assets/stories/desktop/voyage.jpg'
import Architecturals from '../../assets/stories/desktop/architecturals.jpg'
import FeaturesSection from '../Features/FeaturesSection'
import responsive from '../../assets/features/desktop/responsive.svg'
import noLimit from '../../assets/features/desktop/no-limit.svg'
import Embed from '../../assets/features/desktop/embed.svg'
import Footer from '../Footer/Footer'


const STORIES_DATA = [
  {
    title: "The Mountains",
    author: "by Benjamin Cruz",
    imageURL: mountain
  },
  {
    title: "Sunset cityscapes",
    author: "by John Applesseed",
    imageURL: cityScapes
  },
  {
    title: "18 Days Voyage",
    author: "by Alexie Barodin",
    imageURL: Voyage
  },
  {
    title: "Architecturals",
    author: "by Samantha Brooke",
    imageURL: Architecturals
  },
]
const features = [
  {
    img:responsive,
    title: "100% Responsive",
    description: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
  },
  {
    img:noLimit,
    title: "No Photo Upload Limit",
    description: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
  },
  {
    img:Embed,
    title: "Available to Embed",
    description: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
  }
]
const LandingPage = () => {
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
       <section id='stories' className='relative  stories-section'>
        <div className='stories__wrapper'>
          <div className='stories__content relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          {STORIES_DATA.map((story)=>(
            <Story image={story.imageURL} author={story.author} title={story.title} />
            ))}
          </div>
        </div>
       </section>
       <FeaturesSection features={features} />
    </main>
    <Footer />
    </>
  )
}

export default LandingPage