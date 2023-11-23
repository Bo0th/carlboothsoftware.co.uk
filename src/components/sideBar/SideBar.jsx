import React from 'react'
import { BsGithub, BsLinkedin, BsFileEarmarkPdf } from "react-icons/bs";
import { Carl_Booth_CV } from '../../assets';
import './sideBar.css'

const SideBar = () => {
  return (
    <div className='app__sideBar'>
        <a href="https://linkedin.com/in/carlboothsoftware" target='_blank' rel="noreferrer"><BsLinkedin className='app__sideBar-icon' /></a>
        <a href="https://github.com/Bo0th" target='_blank' rel="noreferrer"><BsGithub className='app__sideBar-icon'/></a>
        <a href={Carl_Booth_CV} download><BsFileEarmarkPdf className='app__sideBar-icon'/></a>
    </div>
  )
}

export default SideBar
