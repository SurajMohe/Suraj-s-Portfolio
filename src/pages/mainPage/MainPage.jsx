import React from 'react'
import './MainPage.css'
import { HomePage } from '../homePage/HomePage'
import { SecondPage } from '../secondPage/SecondPage'
import { ThirdPage } from '../thirdPage/ThirdPage'
import { FourthPage } from '../fourthPage/FourthPage'
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
