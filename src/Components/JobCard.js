import React from 'react'

// Images
import Micro from '../Pics/Microsoft.jpg'

function JobCard(props) {
  return (
    <div className='Card'>
      <div className='JobName'>
        <h1>{props.job}</h1>
        <i className="fa-regular fa-clock"></i>
        <span>Now</span>
      </div>
      <div className='JobDetials'>
        <span>{props.location}</span>
        <div className='line'></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='companylogo'>
          <img src={Micro} alt='Company logo.' className='logo' />
          <p>{props.company}</p>
        </div>
        <button>Apply</button>
      </div>
    </div>
  )
}

export default JobCard
