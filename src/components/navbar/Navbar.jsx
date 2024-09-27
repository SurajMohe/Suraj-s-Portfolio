import React from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'
import { NavbarButton } from '../navbar-button/NavbarButton'

export const Navbar = () => {
  return (
    <div className='navbar-main-container'>
      <div className="navbar-container">
      <Link to="/"><div className='navbar-circle'></div></Link>
      <Link className="navbar-circle" to="/user"><i class="ri-user-line"></i></Link>
      <Link className="navbar-circle" to="/work"><i class="ri-tv-2-line"></i></Link>
      <Link className="navbar-circle" to="/cart"><i class="ri-shopping-bag-line"></i></Link>
       {/* Use <a> tag for download functionality */}
       <a className='navbar-circle' href='/SURAJ_MOHE.pdf' download>
          <i className='ri-file-3-line'></i>
        </a>
      <NavbarButton buttonText={"Say Hello! 👋"}/>
      </div>
    </div>
  )
}
