import React from 'react'
import './Navbar.css'

function Navbar () {
  return (
    <nav className='container'>
      <div className='logo-container'>
        <img className="logo-image" src="/reactjs-icon.png" alt="logo react" />
        <h3 className="logo-text">ReactFacts</h3>
      </div>
      <h4 className='project-number'>React Course- Project 1</h4>
    </nav>
  )
}

export default Navbar
