import React from 'react'
import './contact.css'

const Contact = () => {
  const onSubmit = (event) => {
    event.preventDefault()
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')
    alert("Your message has been sent, I shall respond as soon as I can.")
    

  }

  return (
    <div className='app__contact' id='contact'>
      <div className='app__contact-head'>
        <h1>Contact</h1>
        <p>Feel free to contact me using the form below and I will respond to you as soon as possible</p>
      </div>
      <div className='app__contact-form'>
        <form action="https://formsubmit.co/carl.booth23@gmail.com" method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" name='name' id='name' placeholder=' Enter your name' required />
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' placeholder=' Enter your email 'required />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder=' Enter your message' cols="30" rows="10"></textarea>
          <button type='submit'>Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Contact
