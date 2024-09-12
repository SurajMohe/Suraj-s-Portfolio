import React from 'react';
import './NavbarButton.css';

export const NavbarButton = ({ buttonText }) => {
    return (
        <div className='navbar-button-container'>
            <div className="navbar-button-child">
                <h3>{buttonText} 👋</h3>
            </div>
        </div>
    );
};
