import React, { useState } from 'react'
import './Price.css'
const Price = ({yearly,isDark,priceName,priceCaption,PriceValue,style}) => {
  return (
    <div className={`${isDark ? 'dark' : 'light'} ${style} mt-8 lg:mt-0 lg:px-8 lg:py-16 w-full lg:max-w-[300px] flex flex-col items-center px-4 py-8 lg:max-h-auto md:px-4 md:py-4 md:max-h[250px] md:grid md:grid-cols-4 md:grid-rows-3 lg:flex lg:flex-col text-center border-2`}>
      <h4 className='text-[19px] mb-4 font-[700] md:self-center md:col-start-1 md:col-end-2'>{priceName}</h4>
      <p className='price-caption mb-8 text-black opacity-50 md:col-start-1 md:text-left lg:text-center max-w-[450px] md:col-end-3'>{priceCaption}</p>
      <div className='price md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2'>
        <p className='text-[30px] tracking-wider font-[700] '>${yearly ? +PriceValue*10+".00" : PriceValue+".00"}</p>
        <span className='text-black text-[12px] opacity-50'>{yearly ? 'per year' : 'per month'}</span>
      </div>
      <div className='button md:self-center max-w-max md:col-start-1 md:col-end-3 md:max-w-max md:max-h-max bg-black mt-4 text-white text-[12px] py-2 px-16 uppercase font-[700]'>
        <a href="/">pick plan</a>
      </div>
    </div>
  )
}

export default Price