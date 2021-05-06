import React from 'react'
import './WebsiteView.css'

function WebsiteView(props) {
  // console.log(props)
  return (
    <div className='websiteView-container'>
      <div className="website-top-container">
        <span style={{ backgroundColor: '#ea7c71' }}></span>
        <span style={{ backgroundColor: '#f1d255' }}></span>
        <span style={{ backgroundColor: '#67d796' }}></span>
      </div>
      <img src={require(`../images/${props.potato}`).default} alt="" width='100%' />
    </div>
  )
}

export default WebsiteView
