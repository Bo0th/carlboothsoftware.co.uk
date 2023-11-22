import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './header.css'

const Header = () => {
  return (
    <div className='app__header' id='home'>
      <h1>Hi, I'm Carl Booth</h1>
      <p>A frontend focussed web developer who takes passion in building the frontend of websites or applications and wants to help you with your next project</p>
      <HashLink to='/#projects'><button type='button' id='app__header-button'>Projects</button></HashLink>
    </div>
  )
}

export default Header
