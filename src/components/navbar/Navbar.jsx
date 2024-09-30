import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { NavbarButton } from '../navbar-button/NavbarButton';

export const Navbar = () => {
  const [focused, setFocused] = useState("");

  const handleFocus = (identifier) => {
    setFocused(identifier);
  };

  return (
    <div className='navbar-main-container'>
      <div className="navbar-container">
        <Link to="/">
          <div className='navbar-circle'></div>
        </Link>
        {/* Use state and handler to apply styles conditionally */}
        <Link 
          to="/user" 
          onClick={() => handleFocus("one")} 
          className={focused === "one" ? "navbar-circle clickedfocus" : "navbar-circle"}
        >
          <i className="ri-user-line"></i>
        </Link>
        <Link 
          to="/work" 
          onClick={() => handleFocus("two")} 
          className={focused === "two" ? "navbar-circle clickedfocus" : "navbar-circle"}
        >
          <i className="ri-tv-2-line"></i>
        </Link>
        <Link 
          to="/cart" 
          onClick={() => handleFocus("three")} 
          className={focused === "three" ? "navbar-circle clickedfocus" : "navbar-circle"}
        >
          <i className="ri-shopping-bag-line"></i>
        </Link>
        {/* Use <a> tag for download functionality */}
        <a className='navbar-circle' href='/SURAJ_MOHE.pdf' download>
          <i className='ri-file-3-line'></i>
        </a>
        <NavbarButton buttonText={"Say Hello! 👋"} />
      </div>
    </div>
  );
};
