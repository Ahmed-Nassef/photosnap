import React from 'react'
import closeIcon from '../../assets/shared/mobile/close.svg'
import './ResponsiveMenu.css'
const ResponsiveMenu = () => {
  return (
    <>
    <nav className='responsive-menu'>
      <ul className='responsive-menu__links-list'>
        <li className='responsive-menu__link'><a href="/stories">stories</a></li>
        <li className='responsive-menu__link'><a href="/features">features</a></li>
        <li className='responsive-menu__link'><a href="/pricing">pricing</a></li>
      </ul>
      <div className='responsive-menu__sperator w-[80%] mt-4 h-[1px] bg-black'></div>
      <div className='responsive-menu__get-invite'>
        <a href="#a">get an invite</a>
      </div>
    </nav>
    </>
  )
}

export default ResponsiveMenu