import React,{useState} from 'react'
import Price from './Price'
import Switch from '../UI/Switch'
const PricesContainer = () => {
  let [isYearly, setIsYearly] = useState()

  let handleIsYearly = (value) =>{
    setIsYearly(value);
  }
  return (
    <section className='prices bg-white'>
      <div className='prices__wrapper p-4 md:p-16'>
        <div className='prices__content flex flex-col items-center justify-center'>
          <Switch yearly={isYearly} changeIsYearly={handleIsYearly} />
          <div className='prices__price mt-16 flex flex-col lg:flex-row items-center justify-between'>
            <Price
            isDark={false}
             priceName="Basic"
             priceCaption="Includes basic usage of our platform. Recommended for new and aspiring photographers."
             PriceValue="19"
             yearly={isYearly}
             />
             <Price
            isDark={true}
             priceName="Pro"
             priceCaption="More advanced features available. Recommended for photography veterans and professionals."
             PriceValue="39"
             yearly={isYearly} 
             style="lg:mx-12 lg:scale-[1.2]"
             />
             <Price
            isDark={false}
             priceName="Business"
             priceCaption="Additional features available such as more detailed metrics. Recommended for business owners."
             PriceValue="99"
             yearly={isYearly} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricesContainer