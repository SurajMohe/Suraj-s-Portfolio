import React from 'react'
import './MyCartPage.css'
import {FourthPage} from '../fourthPage/FourthPage'
import { Navbar, StoreProject } from '../../components'

export const MyCartPage = ({cartImage,headingText,headingTitle}) => {
  return (
    <div className='my-work-page-main-container'>
      <Navbar/>
      <div className="my-work-text-container">
        <h1 className='store-heading'>Store</h1>
        <p className='store-headings-paragraph'>Discover uniquely crafted designs</p>
      </div>
      <div className="store-project-all-div-container">
          <StoreProject cartImage='./images/porjectImages/image1.avif' headingTitle="Builder Capital" headingText="Landing page tamplate"/>
          <StoreProject cartImage='./images/porjectImages/image2.avif' headingTitle="Builder Capital" headingText="Landing page tamplate"/>
          <StoreProject cartImage='./images/porjectImages/image3.avif' headingTitle="Builder Capital" headingText="Landing page tamplate"/>
          <StoreProject cartImage='./images/porjectImages/image4.avif' headingTitle="Builder Capital" headingText="Landing page tamplate"/>
          <StoreProject cartImage='./images/porjectImages/image5.avif' headingTitle="Builder Capital" headingText="Landing page tamplate"/>
          <StoreProject cartImage='./images/porjectImages/image6.avif' headingTitle="Builder Capital" headingText="Landing page tamplate"/>
      </div>
      <FourthPage/>
    </div>
  )
}
