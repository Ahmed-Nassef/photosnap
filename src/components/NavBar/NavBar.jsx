import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/shared/desktop/logo.svg'
import hamburger from '../../assets/shared/mobile/menu.svg'
import closeIcon from '../../assets/shared/mobile/close.svg'
import ResponsiveMenu from './ResponsiveMenu'
const NavBar = () => {
  let [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <nav className="nav-bar">
      <div className='nav-bar__logo'>
        <a href="/"><img src={logo} alt="snap logo" /></a>
      </div>
      <div className='nav-bar__links hidden md:block'>
        <ul className='nav-bar__links-list flex items-center'>
          <li className='nav-bar__link'><a href="#a">stories</a></li>
          <li className='nav-bar__link ml-8'><a href="/features">features</a></li>
          <li className='nav-bar__link ml-8'><a href="#a">pricing</a></li>
        </ul>
      </div>
      <div className='nav-bar__get-invite hidden md:block'>
        <a href="#a">get an invite</a>
      </div>
      {menuIsOpen?
       <div className='block md:hidden' onClick={()=>setMenuIsOpen(false)}>
        <img src={closeIcon} alt="close icon" />
        </div>: 
        <div className='block md:hidden' onClick={()=>setMenuIsOpen(true)}>
        <img src={hamburger} alt="hamburger menu" />
      </div>}
      {menuIsOpen? <ResponsiveMenu /> : <></>}
    </nav>
  )
}

export default NavBar