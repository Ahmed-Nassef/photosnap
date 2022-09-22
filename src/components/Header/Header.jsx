import React, { useState } from 'react'
import arrow from '../../assets/shared/desktop/arrow-white.svg'
import GradientElement from '../UI/GradientElement'
import Links from '../UI/Links'
const Header = ({contentStyle,headerStyle,paragraphStyle,sectionStyle,leftDivStyle,linkStyle,link,linkExist,isGradientShown,paragraph, header,section,imageUrl,BlackArrow}) => {
  return (
    <div className={`${section} ${sectionStyle} flex md:min-h-[650px] font-[700]`} id={section}>
      <div className={`section-${section}__left-div   ${leftDivStyle} w-full sm:w-[60%] lg:w-[40%] flex flex-col relative items-center justify-center`}>
        <div style={{contentStyle}} className={`${section}__content  w-full relative pl-8 py-8 md:py-0 md:pl-16 `}>
        {isGradientShown && <GradientElement style=" top-0 left-[10%] w-[120px] h-[5px] md:top-0 md:left-0 md:h-full md:w-[5px] " />}
          <h2 className={`${section}__header text-[32px] lg:text-[40px] ${headerStyle}`}>{header}</h2>
          <p className={`${section}__paragraph max-w-[350px] text-[12px] lg:text-[15px] ${paragraphStyle}`}>{paragraph}</p>
          {linkExist && <div className={`${section}__link flex items-center cursor-pointer group`}>
            <Links content={link} className={linkStyle} isBlackArrow={BlackArrow} />
          </div>}
        </div>
      </div>
      <div className={`section-${section}__right-div w-full sm:w-[40%] lg:w-[60%] `} >
        <img src={imageUrl} alt="man" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Header