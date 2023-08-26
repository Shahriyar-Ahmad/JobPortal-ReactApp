import React from 'react'
import DsktopNavbar from './DsktopNavbar'
// import InputCom from './InputCom'
import Values from './Values'
import PoneNabar from './PoneNabar'
function Header() {
    return (
        <div>
            <DsktopNavbar />
            <PoneNabar />
            <div className='header'>
                <div className='inputbox'>
                    <div className='inputdiv'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type='text' placeholder='Search Job Here' />
                        <i class="fa-regular fa-circle-xmark"></i>
                    </div>
                    <div className='inputdiv'>
                        <i class="fa-regular fa-house"></i>
                        <input type='text' placeholder='Search Job Company' />
                        <i class="fa-regular fa-circle-xmark"></i>
                    </div>
                    <div className='inputdiv'>
                        <i class="fa-regular fa-location-dot"></i>
                        <input type='text' placeholder='Search By Location' />
                        <i class="fa-regular fa-circle-xmark"></i>
                    </div>
                    <button>Search</button>
                </div>
                <div className='values-box'>

                    <Values value='Type:' value1='Contract' value2='Part-time' value3='Full-Time' />
                    <Values value='LeveL:' value1='Enter' value2='Intermdiate' value3='Senior' />
                    <Values value='Sort' value1='Relevence' value2='Intermdiate' value3='Relevence' />
                    <button>Clear All</button>
                </div>
            </div>
        </div>
    )
}


export default Header
