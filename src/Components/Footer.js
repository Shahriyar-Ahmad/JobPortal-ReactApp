import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-about'>
        <h3>Jobs <span>.Pk</span></h3>
        <p>Welcome to our site . Find your dream job here...</p>
      </div>
      <div className='footer-list'>
        <div className='box1'>
          <b>Company</b>
          <li>About</li>
          <li>Jobs</li>
          <li>Projects</li>
          <li>Blog</li>
        </div>
        <div className='box1'>
          <b>Resources</b>
          <li>About</li>
          <li>Jobs</li>
          <li>Projects</li>
          <li>Blog</li>
        </div>
        <div className='box1'>
          <b>Support</b>
          <li>About</li>
          <li>Jobs</li>
          <li>Projects</li>
          <li>Blog</li>
        </div>
      </div>
      <div className='footer-contact'>
        <h3>Contact Us</h3>
        <p>Send Your Quries...</p>
        <div>
          <input type='text' placeholder='Find Best Jobs.' /> 
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
