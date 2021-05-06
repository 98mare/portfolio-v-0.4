import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    // <div className="nav-container">
    //   <div className="nav-logo">
    //     logo
    //   </div>
    //   <div className="nav-item">
    //     <ul>
    //       <li><NavLink exact to="/"> <span>H</span>ome</NavLink></li>
    //       <li><NavLink to="/Work"> <span>W</span>ork</NavLink></li>
    //       <li><NavLink to="/Contact"> <span>C</span>onatct</NavLink></li>
    //     </ul>
    //   </div>
    // </div>

    <div className="nav-item">
      <ul>
        <li><NavLink exact to="/"> <span>H</span>ome</NavLink></li>
        <li><NavLink to="/Work"> <span>W</span>ork</NavLink></li>
        <li><NavLink to="/Contact"> <span>C</span>onatct</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar;
