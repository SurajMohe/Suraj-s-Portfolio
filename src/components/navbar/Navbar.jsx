import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { NavbarButton } from '../navbar-button/NavbarButton'

const Navbar = () => {
  return (
    <div className='navbar-main-container'>
      <div className="navbar-container">
      <Link to="/"><div className='navbar-circle'></div></Link>
      <Link className="navbar-circle" to="/user"><i class="ri-user-line"></i></Link>
      <Link className="navbar-circle" to="/watch"><i class="ri-tv-2-line"></i></Link>
      <Link className="navbar-circle" to="/cart"><i class="ri-shopping-bag-line"></i></Link>
      <Link className="navbar-circle" to="SURAJ MOHE (1).pdf" download><i class="ri-file-3-line"></i></Link>
      <NavbarButton />
      </div>
    </div>
  )
}

export default Navbar