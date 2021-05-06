import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={require(`../images/${props.image}`).default} alt="images" />
      <div className="card-detail">
        <h3>Potato Card</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, deleniti?</p>
      </div>
    </div>
  )
}

export default Card;