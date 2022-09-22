import React, { useState } from 'react'
import Links from './Links'
import mountains from '../../assets/stories/desktop/mountains.jpg'
import GradientElement from './GradientElement';
const Story = ({image,author,title,date,dateShown}) => {
  let [isDateShown, setIsDateShown] = useState(dateShown)
  let [isGradientShown,setIsGradientShown] = useState(false);
  let handleMouseEnter = () => {
    setIsGradientShown(true)
  }
  let MouseLeave = () => {
    setIsGradientShown(false)
  }
  return (
    <div className={`row-span-1 hover:translate-y-[-50px] duration-[500ms] relative min-h-[500px] max-h-[500px] flex flex-col items-center justify-end`}
    onMouseEnter={()=>handleMouseEnter()}
    onMouseLeave = {MouseLeave}
    >
      <a href="/stories">
        <img src={image} alt="mountain" className='absolute top-0 left-0 w-full h-full object-cover ' />
        </a>
      <div className='z-10 flex w-[80%] flex-col items-start m-8'>
        <a href="/stories">
      {isDateShown && <p className='text-white text-[12px]'>{date}</p>}
      <h3 className='text-[23px] font-[700] text-white'>{title}</h3>
      <p className='text-white text-[12px]'>{author}</p>
      </a>
      <div className='seperator w-full h-[1px] bg-white my-4'></div>
      <Links content="Read story" arrowStyle="ml-0" divStyle="justify-between w-full" className="text-[12px] font-[700] uppercase" />
      </div>
      < GradientElement style={`duration-300 w-full h-[5px] bottom-0 left-0 ${isGradientShown ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  )
}

export default Story