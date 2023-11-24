import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { videoGameSuggesterImage, hoobankImage, gerichtImage, quantumMindAISImage } from '../../assets'
import './projects.css'

const Projects = () => {
  return (
    <div className='app__projects' id='projects'>
      <div className='app__projects-head'>
        <h1>Projects</h1>
        <p>Here you will find some of the projects that I have created alongside some info about each project</p>
      </div>
      <div className='app__projects-content'>
        <div className='app__projects-content-project'>
          <img src={videoGameSuggesterImage} alt="video game suggester image" />  
          <div className='app__projects-content-project-info'>
            <h2>Video Game Suggester</h2>
            <p>A tool used for video game discovery, get a random suggestion from 850k+ games or browse the catalogue.</p>
            <HashLink to="/MoreInfo/VideoGameSuggester#app__moreInfo"><button type='button' className='app__projects-content-project-button'>More Info</button></HashLink>
          </div>
        </div>
        <div className='app__projects-content-project'>
          <img src={hoobankImage} alt="hoobank image" />
          <div className='app__projects-content-project-info'>
            <h2>Hoobank</h2>
            <p>A landing page designed for a bank.</p>
            <HashLink to="/MoreInfo/Hoobank#app__moreInfo" ><button type='button' className='app__projects-content-project-button'>More Info</button></HashLink>
          </div>
        </div>        
        <div className='app__projects-content-project'>
          <img src={gerichtImage} alt="gericht image" />
          <div className='app__projects-content-project-info'>
            <h2>Gericht</h2>
            <p>A landing page designed for a restaurant.</p>
            <HashLink to="/MoreInfo/Gericht#app__moreInfo" ><button type='button' className='app__projects-content-project-button'>More Info</button></HashLink>
          </div>
        </div>
        <div className='app__projects-content-project'>
          <img src={quantumMindAISImage} alt="quantimMindAIS image" />
          <div className='app__projects-content-project-info'>
            <h2>QuantumMind AI Solutions</h2>
            <p>A landing page designed for a software company.</p>
            <HashLink to="/MoreInfo/QuantumMindAIS#app__moreInfo" ><button type='button' className='app__projects-content-project-button'>More Info</button></HashLink>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default Projects
