import React, { useState } from 'react'
import {Link} from 'react-router-dom'
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
        <Link to="/"><img src={logo} alt="snap logo" /></Link>
      </div>
      <div className='nav-bar__links hidden md:block'>
        <ul className='nav-bar__links-list flex items-center'>
          <li className='nav-bar__link'><Link to="/stories">stories</Link></li>
          <li className='nav-bar__link ml-8'><Link to="/features">features</Link></li>
          <li className='nav-bar__link ml-8'><Link to="/pricing">pricing</Link></li>
        </ul>
      </div>
      <div className='nav-bar__get-invite hidden md:block'>
        <Link to="#Link">get an invite</Link>
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