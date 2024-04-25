import React from 'react'
import { Link } from 'react-router-dom'
import './NavBarStyle.css'

function NavBar() {
  return (
    <nav>
    <div>
      <ul id="navbar">
        <li><a className='active' href= "index.html">Home</a></li>
        <li><a href= "index.html">Men</a></li>
        <li><a href= "index.html">Women</a></li>
        <li><a href= "index.html">About</a></li>
        <li><a href= "index.html">Contact</a></li>
        
      </ul>
    </div>
    </nav>
  )
}

export default NavBar
