import React, { useState } from 'react'
import './Price.css'
const Price = ({yearly,isDark,priceName,priceCaption,PriceValue,style}) => {
  return (
    <div className={`${isDark ? 'dark' : 'light'} ${style} px-8 py-16 max-w-[300px] text-center border-2`}>
      <h4 className='text-[19px] mb-4 font-[700]'>{priceName}</h4>
      <p className='price-caption mb-8 text-black opacity-50'>{priceCaption}</p>
      <p className='text-[30px] tracking-wider font-[700] '>${yearly ? +PriceValue*10+".00" : PriceValue+".00"}</p>
      <span className='text-black text-[12px] opacity-50'>{yearly ? 'per year' : 'per month'}</span>
      <div className='button bg-black mt-4 text-white text-[12px] py-2 px-16 uppercase font-[700]'>
        <a href="/">pick plan</a>
      </div>
    </div>
  )
}

export default Price