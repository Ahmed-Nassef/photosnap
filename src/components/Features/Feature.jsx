import React from 'react'

const Feature = ({title,description,img}) => {
  return (
    <div className='text-center mt-8 flex flex-col items-center'>
      <img src={img} alt="img" className='mb-4' />
      <h4 className='mb-4 font-[700] text-[20px]'>{title}</h4>
      <p className='max-w-[350px] opacity-50'>{description}</p>
    </div>
  )
}

export default Feature