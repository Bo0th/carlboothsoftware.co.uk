import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './thankYou.css'

const ThankYou = () => {
  return (
    <div className='app__thankYou'>
      <h1>Thank you for your email</h1>
      <h2>I shall respond shortly</h2>
      <Link to='/'><button type='button'>Back to home</button></Link>
    </div>
  )
}

export default ThankYou
