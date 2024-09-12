import React from 'react'
import './SecondPage.css'
import { Experience } from '../../components/Experience/Experience'
import { SkillsExpertise } from '../../components/skills&Expertise/SkillsExpertise'
export const SecondPage = () => {
  return (
    <div className='second-page-container'>
      <div className='second-all-div-container'>
          <Experience/>
          <SkillsExpertise/>
      </div>
    </div>
  )
}
