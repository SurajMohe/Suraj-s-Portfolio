import React from 'react'
import './SecondPage.css'
import { Experience } from '../../components/Experience/Experience'
import { SkillsExpertise } from '../../components/skills&Expertise/SkillsExpertise'
import { ConnectComponent } from '../../components/connectComponent/ConnectComponent'
import { companyImages, ExperienceDetails } from '../../components/Experience/ExperieceData'
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
