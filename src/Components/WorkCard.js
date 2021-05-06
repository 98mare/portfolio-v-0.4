import React from 'react'
import './WorkCard.css'

function WorkCard(props) {
  return (
    <div className="workCard-container">
      <div className="card-img">
        <img src={require(`../images/${props.logo}`).default} alt="" />
      </div>
      <div className="card-content">
        <h4>{props.workDone}</h4>
        <h3>{props.clientName}</h3>
      </div>
    </div>
  )
}

export default WorkCard
