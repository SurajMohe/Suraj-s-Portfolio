import React from 'react'
import './MainPage.css'
import { HomePage } from '../pages/homePage/HomePage'
import { SecondPage } from '../pages/secondPage/SecondPage'
import { ThirdPage } from '../pages/thirdPage/ThirdPage'
import { FourthPage } from '../pages/fourthPage/FourthPage'
export const MainPage = () => {
  return (
    <div className='main-page-container'>
      <HomePage />
      <SecondPage />
      <ThirdPage />
      <FourthPage/>
    </div>
  )
}
