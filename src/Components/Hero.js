import React from 'react'
import ParticleComponent from './ParticleComponent'
import './Hero.css'
import { ReactComponent as ReactLogo } from '../images/undraw_coding_6mjf.svg'
import SpringMouseScrollingAnimation from '../Components/SpringMouseScrollingAnimation'

function Hero() {
  return (
    <div>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}>
        <ParticleComponent />
      </div>
      <div className="hero-conainer">
        <div className="col-1-hero">
          <h3> <span>Hi</span>, I am Suman Sunuwar</h3>
          <h3>Web Developer</h3>
          <SpringMouseScrollingAnimation />
        </div>
        <div className="col-2-hero">
          <ReactLogo />
        </div>

      </div>
    </div>
  )
}

export default Hero
