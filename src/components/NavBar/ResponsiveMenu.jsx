import React from 'react'
import { Link } from 'react-router-dom'
import closeIcon from '../../assets/shared/mobile/close.svg'
import './ResponsiveMenu.css'
const ResponsiveMenu = () => {
  return (
    <>
    <nav className='responsive-menu z-30'>
      <ul className='responsive-menu__links-list'>
        <li className='responsive-menu__link'><Link to="/stories">stories</Link></li>
        <li className='responsive-menu__link'><Link to="/features">features</Link></li>
        <li className='responsive-menu__link'><Link to="/pricing">pricing</Link></li>
      </ul>
      <div className='responsive-menu__sperator w-[80%] mt-4 h-[1px] bg-black'></div>
      <div className='responsive-menu__get-invite'>
        <Link to="#Link">get an invite</Link>
      </div>
    </nav>
    </>
  )
}

export default ResponsiveMenu