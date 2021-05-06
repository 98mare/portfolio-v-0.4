import React from 'react';
import Socialmedia from './Socialmedia';
import './Footer.css';
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer-container'>
      <h3>I’d love for an opportunity to meet and talk further about how we may work together.</h3>
      <hr className='hrOne' />
      <div className="footer-bottom">
        <div className="col-1-footer">
          <ul>
            <li><NavLink exact to="/"> <span>H</span>ome</NavLink></li>
            <li><NavLink to="/Work"> <span>W</span>ork</NavLink></li>
            <li><NavLink to="/Contact"> <span>C</span>onatct</NavLink></li>
          </ul>
          <p>All Rights reserved © Suman sunuwar, 2021</p>
        </div>
        <div className="col-2-footer">
          <Socialmedia />
        </div>
      </div>
    </div>
  )
}

export default Footer
