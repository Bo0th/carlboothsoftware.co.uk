import React from 'react'
import { BsGithub, BsLinkedin, BsFileEarmarkPdf } from "react-icons/bs";
import './footer.css'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-head'>
        <div className='app__footer-head-left'>
          <h3>Carl Booth</h3>
          <p>A frontend focussed web developer who takes passion in building the frontend of websites or applications and wants to help you with your next project</p>
          <br />
          <p>Carl.booth23@gmail.com</p>
          <p>07872-954-594</p>
        </div>
        <div className='app__footer-head-links'>
          <BsLinkedin className='app__footer-head-links-icon' />
          <BsGithub className='app__footer-head-links-icon'/>
          <BsFileEarmarkPdf className='app__footer-head-links-icon'/>
        </div>
      </div>
      <div className='app__footer-break'></div>
      <div className='app__footer-copyright'>
        <p>© Copright 2023. Website developed by <strong>Carl Booth</strong></p>
      </div>
    </div>
  )
}

export default Footer
