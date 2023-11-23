import React from 'react'
import { BsGithub, BsLinkedin, BsFileEarmarkPdf } from "react-icons/bs";
import { Carl_Booth_CV } from '../../assets';
import './footer.css'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-head'>
        <div className='app__footer-head-left'>
          <h3>Carl Booth</h3>
          <p className='app__footer-head-left-info'>A frontend focussed web developer who takes passion in building the frontend of websites or applications and wants to help you with your next project</p>
          <br />
          <p>Carl.booth23@gmail.com</p>
          <p>07872-954-594</p>
        </div>
        <div className='app__footer-head-links'>
          <a href="https://linkedin.com/in/carlboothsoftware" target='_blank' rel="noreferrer"><BsLinkedin className='app__footer-head-links-icon' /></a>
          <a href="https://github.com/Bo0th" target='_blank' rel="noreferrer"><BsGithub className='app__footer-head-links-icon'/></a>
          <a href={Carl_Booth_CV} download><BsFileEarmarkPdf className='app__footer-head-links-icon'/></a>
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
