import React from 'react'
import './GradientElement.css'
const GradientElement = ({style}) => {
  return (
    <div className={`${style} gradient absolute block h-full`}></div>
  )
}

export default GradientElement