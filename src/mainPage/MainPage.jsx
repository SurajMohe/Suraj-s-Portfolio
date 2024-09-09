import React from 'react'
import './MainPage.css'
import {HomePage} from '../pages/homePage/HomePage'
import {SecondPage } from '../pages/secondPage/SecondPage'
export const MainPage = () => {
  return (
    <div className='main-page-container'>
        <HomePage/>
        <SecondPage/>
    </div>
  )
}
