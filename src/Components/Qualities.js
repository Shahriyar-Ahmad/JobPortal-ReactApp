import React from 'react'
import Quality from './Quality'
import Quality1 from '../Pics/quality1.png'
import Quality2 from '../Pics/quality2.png'
import Quality3 from '../Pics/quality3.png'
function Qualities() {
  return (
    <div className='qualities' >
      <h1>What you experience...</h1>
      <div className='qualities-box'>
      <Quality src={Quality1} title='Simplicity'/>
      <Quality src={Quality2} title='Social good'/>
      <Quality src={Quality3} title='Trust'/>
      </div>
    </div>
  )
}

export default Qualities
