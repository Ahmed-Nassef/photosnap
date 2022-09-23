import React, { useState } from 'react'
import './Switch.css'
const Switch = ({yearly,changeIsYearly}) => {
  let [isYearly, setIsYearly] = useState(yearly)
  let sendIsYearly = (value) => {
    setIsYearly(value)
    changeIsYearly(value)
  }
  return (
    <>
  <div className='prices__switch-wrapper font-[700] text-[1.25rem] flex items-center justify-center'>
    <span className={`pr-8 text-[#DFDFDF]  ${!isYearly ? "monthly-active" : ""}`}>Monthly</span>
    <div onClick={()=>sendIsYearly(!isYearly)} className={`prices__switch cursor-pointer hover:scale-125 relative h-[30px] w-[60px] rounded-full ${!isYearly ? "monthly" : "yearly"}`}></div>
    <span className={`pl-8 text-[#DFDFDF]  ${isYearly ? "yearly-active" : ""}`}>Yearly</span>
  </div>
    </>
  )
}

export default Switch