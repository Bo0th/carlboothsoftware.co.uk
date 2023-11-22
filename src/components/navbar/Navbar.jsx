import {React, useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import profileImage from '../../assets/profileImage.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import './navbar.css'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false)

  return (
    <div className='app__navbar'>
      <div className='app__navbar-profile'>
        <img src={profileImage} alt="profile image" />
        <h1>Carl Booth</h1>
      </div>
      <div className='app__navbar-links'>
        <HashLink to="/#home"><a href=""></a>Home</HashLink>
        <HashLink to="/#about"><a href=""></a>About</HashLink>
        <HashLink to="/#projects"><a href=""></a>Projects</HashLink>
        <HashLink to="/#contact"><a href=""></a>Contact</HashLink>
      </div>

      <div className='app__navbar-links-smallscreen'>
        {displayMenu ?         
          <div className='app__navbar-links-smallscreen-menu'>
            <HashLink to="/#home" onClick={() => setDisplayMenu(false)}>Home</HashLink>
            <HashLink to="/#about" onClick={() => setDisplayMenu(false)}>About</HashLink>
            <HashLink to="/#projects" onClick={() => setDisplayMenu(false)}>Projects</HashLink>
            <HashLink to="/#contact" onClick={() => setDisplayMenu(false)}>Contact</HashLink>
          </div>
          :  
          <RxHamburgerMenu className='app__navbar-links-smallscreen-burger' onClick={() => setDisplayMenu(true)}/>
        }
        

      </div>
    </div>
  )
}

export default Navbar