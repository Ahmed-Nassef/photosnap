import React from 'react'
import Feature from './Feature'

const Features = ({features}) => {
  return (
    <section className="features-section bg-white">
      <div className='features-section__wrapper p-16'>
        <div className='features-section__content flex flex-col md:flex-row items-center justify-evenly'>
      {features.map((feature)=>(
        <Feature img={feature.img} title={feature.title} description={feature.description} />
      ))}
        </div>
      </div>
    </section>
  )
}

export default Features