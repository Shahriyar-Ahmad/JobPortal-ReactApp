import React from 'react'

function Quality(props) {
  return (
    <div className='quality'>
        <div className='top'>
        <img src={props.src} alt='Quality Pic'/>
        <b>{props.title}</b>
        </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed do eiusmod tempor incididunt.
      </p>
    </div>
  )
}

export default Quality
