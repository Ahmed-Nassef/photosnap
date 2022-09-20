import React, { useState } from 'react'
import arrow from '../../assets/shared/desktop/arrow-white.svg'
import GradientElement from '../UI/GradientElement'
import Links from '../UI/Links'
const Header = ({contentStyle,headerStyle,paragraphStyle,sectionStyle,leftDivStyle,linkStyle,link,isGradientShown,paragraph, header,section,imageUrl,BlackArrow}) => {
  // let [isBlackArrow , setIsBlackArrow] = useState(BlackArrow)
  return (
    <div className={`${section} ${sectionStyle} min-h-[650px] flex font-[700]`} id={section}>
      <div className={`section-${section}__left-div ${leftDivStyle} w-[60%] flex flex-col relative items-center justify-center`}>
        <div style={{contentStyle}} className={`${section}__content w-full relative pl-8 my-8 md:pl-16 md:my-0 `}>
        {isGradientShown && <GradientElement />}
          <h2 className={`${section}__header text-[32px] lg:text-[40px] ${headerStyle}`}>{header}</h2>
          <p className={`${section}__paragraph max-w-[350px] text-[12px] lg:text-[15px] ${paragraphStyle}`}>{paragraph}</p>
          <div className={`${section}__link flex items-center cursor-pointer group`}>
            <Links content={link} className={linkStyle} isBlackArrow={BlackArrow} />
          </div>
        </div>
      </div>
      <div className={`section-${section}__right-div w-[40%] `} >
        <img src={imageUrl} alt="man" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Header