import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import {Navbar, Header, Projects, Footer, Contact, About, ThankYou, MoreInfo} from './components'
import projectProps from './components/moreInfo/projectInfo'
import './app.css'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='app__NavSeparater'></div>
        <Switch>
          <Route path='/' exact>
            <Header />
            <About />
            <Projects />
            <Contact />
          </Route>
          <Route path='/MoreInfo/Hoobank' >
            <MoreInfo github={projectProps.hoobank.github} title={projectProps.hoobank.title} tagline={projectProps.hoobank.tagline} image={projectProps.hoobank.image.hoobankImage} description={projectProps.hoobank.description} tools={projectProps.hoobank.toolsUsed} link={projectProps.hoobank.link}/>
          </Route>
          <Route path='/MoreInfo/QuantumMindAIS' >
          <MoreInfo github={projectProps.quantumMindAIS.github} title={projectProps.quantumMindAIS.title} tagline={projectProps.quantumMindAIS.tagline} image={projectProps.quantumMindAIS.image.quantumMindAISImage} description={projectProps.quantumMindAIS.description} tools={projectProps.quantumMindAIS.toolsUsed} link={projectProps.quantumMindAIS.link}/>
          </Route>
          <Route path='/MoreInfo/Gericht' >
          <MoreInfo github={projectProps.gericht.github} title={projectProps.gericht.title} tagline={projectProps.gericht.tagline} image={projectProps.gericht.image.gerichtImage} description={projectProps.gericht.description} tools={projectProps.gericht.toolsUsed} link={projectProps.gericht.link}/>
          </Route>
          <Route path='/MoreInfo/VideoGameSuggester' >
          <MoreInfo github={projectProps.videoGameSuggester.github} title={projectProps.videoGameSuggester.title} tagline={projectProps.videoGameSuggester.tagline} image={projectProps.videoGameSuggester.image.videoGameSuggesterImage} description={projectProps.videoGameSuggester.description} tools={projectProps.videoGameSuggester.toolsUsed} link={projectProps.videoGameSuggester.link}/>
          </Route>
          <Route path='/thanks'>
           <ThankYou /> 
          </Route>
        </Switch>  
        <Footer />         
      </div>
    </Router>
  )
}

export default App
