import React from 'react'
import GradientElement from './GradientElement'
import Links from './Links'
const SubHeader = ({SubHeaderTitle,image}) => {
  return (
    <section className={`${SubHeaderTitle} relative`}>
      <img src={image} className="absolute z-[-100] w-full h-full object-cover top-0 left-0" alt="beta mountain" />
      <div className={`${SubHeaderTitle}__wrapper z-10`}>
        <div className={`${SubHeaderTitle}__content lg:h-[250px] flex flex-col items-start md:flex-row md:items-center z-10`}>
          <div className={`${SubHeaderTitle}__title md:w-1/2 h-full p-8 lg:p-12`}>
          <GradientElement style=" top-0 left-[10%] w-[120px] h-[5px] md:top-0 md:left-0 md:h-full md:w-[5px] " />
            <h3 className='text-white text-[2.441rem] tracking-wider font-[700]'>WE'RE IN BETA.<br/>GET YOUR INVITE TODAY!</h3>
          </div>
          <div className={`${SubHeaderTitle}__link  md:w-1/2 flex p-8 lg:p-12 items-center justify-end h-full`}>
            <Links content="GET AN INVITE" divStyle="font-[700]" isBlackArrow={false} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubHeader