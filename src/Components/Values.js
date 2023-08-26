import React from 'react'

function Values(props) {
  return (
    <div className='values'>
      <label>{props.value}</label>
      <select>
        <option>{props.value1}</option>
        <option>{props.value2}</option>
        <option>{props.value3}</option>
      </select>
    </div>
  )
}

export default Values
