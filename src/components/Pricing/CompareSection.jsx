import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import './CompareSection.css'
const CompareSection = () => {
  return (
    <section className='compare-section'>
      <div className='compare-section__wrapper p-16'>
        <div className='compare-section__content flex flex-col items-center'>
          <h2 className='tracking-wider text-[2.441rem] font-[700]'>COMPARE</h2>
          <div className='compare-section__table font-[700] text-[12px] tracking-wider w-[800px] uppercase'>
            <div className='grid grid-cols-5 row-1 my-4 border-b p-4 border-black'>
              <span className='col-start-1 col-end-3'>the features</span>
              <span  className='center'>basic</span>
              <span className='center'>pro</span>
              <span className='center'>business</span>
            </div>
            <div className='grid row-2 my-4 grid-cols-5 p-4'>
              <span className='col-start-1 col-end-3'>UNLIMITED STORY POSTING</span>
              <span className='center'><AiOutlineCheck fontSize={20} /></span>
              <span className='center'><AiOutlineCheck fontSize={20} /></span>
              <span className="text-center center"><AiOutlineCheck fontSize={20} /></span>
            </div>
            <div className='grid row-3 my-4 grid-cols-5 p-4'>
              <span className='col-start-1 col-end-3'>UNLIMITED PHOTO UPLOAD</span>
              <span className='center'><AiOutlineCheck fontSize={20} /></span>
              <span className='center'><AiOutlineCheck  fontSize={20}/></span>
              <span className='center'><AiOutlineCheck fontSize={20} /></span>
            </div>
            <div className='grid row-4 my-4 grid-cols-5 p-4'>
              <span className='col-start-1 col-end-3'>EMBEDDING CUSTOM CONTENT</span>
              <span className='center'></span>
              <span className='center'><AiOutlineCheck fontSize={20} /></span>
              <span className='center'><AiOutlineCheck fontSize={20} /></span>
            </div>
            <div className='grid row-5 my-4 grid-cols-5 p-4'>
              <span className='col-start-1 col-end-3'>CUSTOMIZE METADATA</span>
              <span></span>
              <span className='center'><AiOutlineCheck fontSize={20} /></span>
              <span className='center'><AiOutlineCheck fontSize={20} /></span>
            </div>
            <div className='grid row-6 my-4 grid-cols-5 p-4'>
              <span className='col-start-1 col-end-3'>ADVANCED METRICS</span>
              <span></span>
              <span></span>
              <span className='center'><AiOutlineCheck  fontSize={20}/></span>
            </div>
            <div className='grid row-7 my-4 grid-cols-5 p-4'>
              <span className='col-start-1 col-end-3'>PHOTO DOWNLOADS</span>
              <span></span>
              <span></span>
              <span className='center'><AiOutlineCheck fontSize={20} /></span>
            </div>
            <div className='grid row-8 my-4 grid-cols-5 p-4'>
              <span className='col-start-1 col-end-3'>SEARCH ENGINE INDEXING</span>
              <span></span>
              <span></span>
              <span className='center'><AiOutlineCheck fontSize={20} /></span>
            </div>
            <div className='grid row-9 my-4 grid-cols-5 p-4'>
              <span className='col-start-1 col-end-3'>CUSTOM ANALYTICS</span>
              <span></span>
              <span></span>
              <span className='center'><AiOutlineCheck fontSize={20} /></span>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CompareSection