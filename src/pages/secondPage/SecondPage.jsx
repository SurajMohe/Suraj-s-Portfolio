import React from 'react'
import './SecondPage.css'
import { companyImages, ConnectComponent, Experience, ExperienceDetails, SkillsExpertise } from '../../components/inedx'
export const SecondPage = () => {
  return (
    <div className='second-page-container'>
      <div className='second-all-div-container'>
          <Experience experienceDetails={ExperienceDetails} companyArray={companyImages}/>
          <SkillsExpertise/>
          <ConnectComponent/>
      </div>
    </div>
  )
}
