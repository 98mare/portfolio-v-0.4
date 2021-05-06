import React from 'react'
import './ServicesContent.css'

function ServicesContent(props) {

  return (
    <div className='servicesContent'>
      <h3>{props.sTitle}</h3>
      <p>{props.sDetail}</p>
    </div>
  )
}

export default ServicesContent
