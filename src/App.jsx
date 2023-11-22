import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import {Navbar, Header, Projects, Footer, Contact, About, ThankYou} from './components'
import './app.css'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />  
          </Route>
          <Route path='/thanks'>
           <ThankYou /> 
          </Route>
        </Switch> 
        
      </div>
    </Router>
  )
}

export default App
