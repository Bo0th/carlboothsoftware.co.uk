import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './about.css'
import SkillCard from '../skillCard/SkillCard'

const About = () => {

    const skills = ['HTML', 'CSS', 'Javascript', 'React', 'GIT', 'Github', 'Responsive Design', 'Express', 'Node JS']

  return (
    <div className='app__about' id='about'>
      <div className='app__about-head'>
        <h1>About Me</h1>
        <p>Here you will find more information about me, what I do and my current skills. Use the contact button below if you would like to get in touch or use the links to my <strong>Linkedin</strong>, <strong>Github</strong> and <strong>CV</strong> at the top and bottom of this page </p>
      </div>
      <div className='app__about-content'>
        <div className='app__about-content-info'>
            <h2>Get to know me!</h2>
            <p>I'm a <strong>Frontend Web Developer</strong> who enjoys building the front-end of websites and web applications leading to the success of the overall product. Check out some of my work in the <strong>projects</strong> section.</p>
            <br />
            <p>I'm also an avid musician, gamer and miniature painter who takes pleasure in engaging with all these communities on top of coding. </p>
            <br />
            <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then please <strong>get in touch</strong>. </p>
            <HashLink to='/#contact'><button type='button' id='app__about-content-info-button'>Contact</button></HashLink>
        </div>
        <div className='app__about-content-skills'>
            <h2>My Skills</h2>
            <div className='app__about-content-skills-cards'>
                {skills.map((skills) => {
                    return(
                        <SkillCard skill={skills} />
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
