import React from 'react'
import './projects.css'
import { videoGameSuggesterImage, hoobankImage, gerichtImage, quantumMindAISImage } from '../../assets'

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
            <p>My Video Game Suggester app was conceived from my passion for gaming and is a tool used for video game discovery. It suggests a game based on a selected platform from a pool of over 850k+ games. </p>
            <a href="https://videogamesuggester.carlboothsoftware.co.uk"><button type='button' className='app__projects-content-project-button'>More Info</button></a>
          </div>
        </div>
        <div className='app__projects-content-project'>
          <img src={hoobankImage} alt="hoobank image" />
          <div className='app__projects-content-project-info'>
            <h2>Hoobank</h2>
            <p>Hoobank is a banking platform revolutionizing next generation payment methods to improve customer experience. </p>
            <a href="https://hoobank.carlboothsoftware.co.uk"><button type='button' className='app__projects-content-project-button'>More Info</button></a>
          </div>
        </div>        
        <div className='app__projects-content-project'>
          <img src={gerichtImage} alt="gericht image" />
          <div className='app__projects-content-project-info'>
            <h2>Gericht</h2>
            <p>This landing page is built for a restaurant and is made to look attractive in order to entice potential customers into booking a table.</p>
            <a href="https://sotto.carlboothsoftware.co.uk"><button type='button' className='app__projects-content-project-button'>More Info</button></a>
          </div>
        </div>
        <div className='app__projects-content-project'>
          <img src={quantumMindAISImage} alt="quantimMindAIS image" />
          <div className='app__projects-content-project-info'>
            <h2>QuantumMind AI Solutions</h2>
            <p>A frontend for a software company pushing the boundaries of current AI technology. AI is a fascinating technology that will only become more prevalent in the future across many industries.</p>
            <a href="https://quantummindais.carlboothsoftware.co.uk"><button type='button' className='app__projects-content-project-button'>More Info</button></a>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default Projects
