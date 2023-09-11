// React import
import React, { useRef } from 'react'

// Components
import DsktopNavbar from './DsktopNavbar'
// import InputCom from './InputCom'
// correctly not show in this header section
import Values from './Values'
import PoneNabar from './PoneNabar'


function Header() {
    const clearallRef = useRef();
    const input1Ref = useRef();
    const input2Ref = useRef();
    const input3Ref = useRef();
    function clearallData() {
        clearallRef.current.reset();

    }
    function clearinput1Data() {
        input1Ref.current.value = '';
    }
    function clearinput2Data() {
        input2Ref.current.value = '';
    }
    function clearinput3Data() {
        input3Ref.current.value = '';
    }
    return (
        <div>
            <DsktopNavbar />
            <PoneNabar />
            <header className='header'>
                <form ref={clearallRef} >
                    <div className='inputbox'>
                        <div className='inputdiv'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input ref={input1Ref} type='text' placeholder='Search Job Here' />
                            <i className="fa-regular fa-circle-xmark" onClick={clearinput1Data}></i>
                        </div>
                        <div className='inputdiv'>
                            <i className="fa-solid fa-house"></i>
                            <input ref={input2Ref} type='text' placeholder='Search Job Company' />
                            <i className="fa-regular fa-circle-xmark" onClick={clearinput2Data}></i>
                        </div>
                        <div className='inputdiv'>
                            <i className="fa-solid fa-location-dot"></i>
                            <input ref={input3Ref} type='text' placeholder='Search By Location' />
                            <i className="fa-regular fa-circle-xmark" onClick={clearinput3Data}></i>
                        </div>
                        <button>Search</button>
                    </div>

                    <div className='values-box'>
                        <Values value='Type:' value1='Contract' value2='Part-time' value3='Full-Time' />
                        <Values value='Level:' value1='Enter' value2='Intermdiate' value3='Senior' />
                        <Values value='Sort By:' value1='Relevence' value2='Intermdiate' value3='Relevence' />
                        <button onClick={clearallData} >Clear All</button>
                    </div>
                </form>
            </header>
        </div>
    )
}


export default Header
