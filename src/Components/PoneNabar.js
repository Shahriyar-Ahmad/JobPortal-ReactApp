import { useState } from "react"
import React from 'react'

export default function PoneNabar() {
    const [showul,setShowul] = useState(false)
  return (
    <div className='ponenav'>
        {
            showul? 
            <ul className='p-ul'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>JOBS</li>
            <li>PROJECTS</li>
          </ul>
          :<></>
           
        }
      <h3>Jobs<span>.Pk</span></h3>
      <i class="fa-solid fa-bars" onClick={()=>setShowul(!showul)}></i>
  
    </div>
  )
}
