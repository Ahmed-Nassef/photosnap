import React from 'react'
import images from '../../constants/images'
import Links from '../UI/Links'

const StoriesHeader = () => {
  return (
    <section className='stories-header'>
      <div className='stories-header__wrapper'>
        <div className='stories-header__content text-white p-10 md:p-20 relative min-h-[650px]'>
          <img src={images.moonOfAppalacia} alt="moon of applacia" className='z-[-10] absolute top-0 left-0 object-cover w-full h-full' />
          <div className='stories-header__header'>
            <p className=' text-[12px] tracking-wider uppercase font-[700]'>LAST MONTH'S FEATURED STORY</p>
            <h1 className='text-[1.953rem] md:text-[2.7rem] font-[700] mt-2 tracking-wider max-w-[300px]'>HAZY FULL MOON OF APPALACHIA</h1>
            <p><span className='text-white opacity-50'>March 2nd 2020</span> by John Appleseed</p>
          </div>
          <div className='stories-header__description mt-8'>
            <p className='max-w-[450px] md:max-w-[400px] text-white opacity-50'>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
            <Links content="READ THE STORY" divStyle="mt-8 font-[700]" isBlackArrow={false} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoriesHeader