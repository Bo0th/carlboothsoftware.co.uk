import {React, useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import profileImage from '../../assets/profileImage.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import './navbar.css'

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false)

  return (
    <div className='app__navbar'>
      <div className='app__navbar-profile'>
        <img src={profileImage} alt="profile image" />
        <h1>Carl Booth</h1>
      </div>
      <div className='app__navbar-links'>
        <Link to="/#home"><a href=""></a>Home</Link>
        <Link to="/#about"><a href=""></a>About</Link>
        <Link to="/#projects"><a href=""></a>Projects</Link>
        <Link to="/#contact"><a href=""></a>Contact</Link>
      </div>

      <div className='app__navbar-links-smallscreen'>
        {displayMenu ?         
          <div className='app__navbar-links-smallscreen-menu'>
            <Link to="/" onClick={() => setDisplayMenu(false)}>Home</Link>
            <Link to="/" onClick={() => setDisplayMenu(false)}>About</Link>
            <Link to="/" onClick={() => setDisplayMenu(false)}>Projects</Link>
            <Link to="/" onClick={() => setDisplayMenu(false)}>Contact</Link>
          </div>
          :  
          <RxHamburgerMenu className='app__navbar-links-smallscreen-burger' onClick={() => setDisplayMenu(true)}/>
        }
        

      </div>
    </div>
  )
}

export default Navbar