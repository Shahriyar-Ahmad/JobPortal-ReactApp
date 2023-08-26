import React from 'react'

function JobCard(props) {
  return (
    <div className='Card'>
      <div className='JobName'>
        <h1>{props.job}</h1>
        <span>Now</span>
      </div>
      <div className='JobDetials'>
      <span>{props.location}</span>
      <div className='line'></div>
      <p>It is job for job dksl sldkskdo eos iso sldk alsl.</p>
      <div>By {props.company}</div>
      <button>Apply</button>
      </div>
    </div>
  )
}

export default JobCard
