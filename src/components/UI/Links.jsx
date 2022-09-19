import React, { useState } from 'react'
import whiteArrow from '../../assets/shared/desktop/arrow-white.svg'
import blackArrow from '../../assets/shared/desktop/arrow.svg'

const Links = ({content,isBlackArrow,className}) => {
  let[black,setBlackArrow] = useState(isBlackArrow)
  return (
    <>
      <a href="#a" className={`hover:underline ${className} text-[12px] tracking-widest text-white hover:underline-offset-1`}>{content}</a>
      <img src={isBlackArrow ? blackArrow : whiteArrow} className='ml-8 group-hover:ml-4 duration-300' alt='arrow'></img>
      </>
  )
}

export default Links