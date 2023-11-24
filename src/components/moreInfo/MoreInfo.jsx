import React from 'react'
import { HashLink } from 'react-router-hash-link'
import SkillCard from '../skillCard/SkillCard'
import './moreInfo.css'

const MoreInfo = ({title, tagline, image, description, tools, link, github}) => {
  return (
    <div className='app__moreInfo' id='app__moreInfo'> 
      <div className='app__moreInfo-head'>
        <h1>{title}</h1>
        <p>{tagline}</p>
        <a href={link} target='_blank'><button type='button'>View Project</button></a>
      </div>
      <div className='app__moreInfo-content'>
      <img src={image} alt="image" />
        <div className='app__moreInfo-content-container'> 
          <h2>{title}</h2>
          <div className='app__moreInfo-content-description' dangerouslySetInnerHTML={{__html: description}}></div> 
          <p className='app__moreInfo-content-description'>Find the Github repository <a href={github} target='_blank'>here</a>.</p>
          <h2>Tools Used</h2>
          <div className='app__moreInfo-content-skillCard'>
            {tools.map((skills) => {
                return(
                    <SkillCard skill={skills} />
                )
            })}
          </div>
          <div className='app__moreInfo-content-buttons'>
            <a href={link} target='_blank'><button type='button'>View Project</button></a>
            <HashLink to='/#projects'><button type='button' id='app__moreInfo-backButton'>Back</button></HashLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
