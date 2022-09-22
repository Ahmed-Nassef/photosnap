import React from 'react'
import Feature from './Feature'

const FeaturesSection = ({features,featuresStyle}) => {
  return (
    <section className={`features-section w-full bg-white`}>
      <div className='features-section__wrapper w-full p-16'>
        <div className={`features-section__content ${featuresStyle} w-full flex flex-col md:flex-row items-center justify-evenly`}>
      {features.map((feature)=>(
        <Feature key={feature.title} img={feature.image} title={feature.title} description={feature.description} />
      ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection