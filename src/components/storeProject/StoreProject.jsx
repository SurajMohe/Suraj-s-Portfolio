import React from 'react'
import './StoreProject.css'

export const StoreProject = ({cartImage,headingTitle,headingText}) => {
  return (
    <div className='store-project-main-container'>
        <div className="cart-top-container">
            <img className='cart-top-image' src={cartImage} alt="" />
        </div>
        <div className="cart-bottom-container">
            <div className="cart-bottom-text-container">
                <h4 className='cart-heading-title'>{headingTitle}</h4>
                <p className='cart-heading-text'>{headingText}</p>
            </div>
            <button className='cart-bottom-button'>
                Buy Now <i class="ri-arrow-right-up-line"></i>
                </button>
        </div>
    </div>
  )
}
