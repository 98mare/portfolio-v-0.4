import React from 'react'
import './MobileView.css'

function MobileView(props) {
  // console.log(props)
  return (
    <div className="mobile-view-container">
      <span></span>
      <img src={require(`../images/${props.image}`).default} alt="" width='100%' />
      <span></span>
    </div>
  )
}

export default MobileView
