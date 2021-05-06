import React from 'react'
import './About.css'
import aboutData from '../Containers/Data/WorkData.json';

function About() {
  return (
    <div className='about-container'>
      <h1>About</h1>
      <div className="about-detail">
        <p key='0'>
          {aboutData.aboutInfo.map((e) => {
            return e.info
          })}
        </p>
      </div>
    </div>
  )
}

export default About
