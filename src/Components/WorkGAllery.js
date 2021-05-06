import React from 'react'
import Card from './Card'
import './WorkGAllery.css'
// import WorkPage from '../Containers/DisplaySection/WorkPage'
import { NavLink } from 'react-router-dom'


function WorkGAllery(props) {
  return (
    <div className="WorkGallery-container">
      <div className="col-1-container">
        <div className="col-heading">
          <h2>some of my Works</h2>
        </div>
        <Card image="tobias-eFFyP-d0iFg-unsplash.jpg" />
        <Card image='marek-piwnicki--1VqLH9NjMQ-unsplash.jpg' />

      </div>
      <div className="col-2-container">
        <Card image='tobias-eFFyP-d0iFg-unsplash.jpg' />
        <NavLink to='./work' className='btnOne'>More</NavLink>

      </div>
    </div>
  )
}

export default WorkGAllery

