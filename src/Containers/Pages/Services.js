import React, { useState } from 'react'
import ServicesContent from '../../Components/ServicesContent'
import { ReactComponent as ReactLogo } from '../../images/undraw_Designer_by46.svg'
import './Services.css'
import serviceData from '../Data/WorkData.json'


function Services(props) {


  return (
    <div className="services-continer">
      <div className="col-1-services">
        <h2>Services:</h2>
        {
          serviceData.services.map((e) => {
            return (
              <div key={e.id}>
                <ServicesContent sTitle={e.serviceTitle} sDetail={e.serviceDetail} />
              </div>
            )
          })
        }
      </div>
      <div className="col-2-services">
        <ReactLogo className='svgOne' />
      </div>
    </div >
  )
}

export default Services
