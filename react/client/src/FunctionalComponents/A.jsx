
import React, { StrictMode } from 'react'
import B from './B' 


function A() {
    let A=10  
    let a={age:10}
    console.log(a)
    return (
        <StrictMode>
            <h3>A component</h3>
            <h1>{a.age}</h1>
            {/* <B/> */}
            <B Hello="hai"/>
        </StrictMode>
            
          
       
    )
}

export default A