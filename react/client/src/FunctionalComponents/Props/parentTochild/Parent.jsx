 import React, { useState } from 'react'
 
 function Parent(props) {
    console.log(props.Value)
    let [a,seta]=useState(99)
    // console.log(a,b)
    let increase =()=>{
          seta(a+1)

    }
   return (
     <div>
       <button onClick={increase}>Increase Parent {a}</button> <br />
       {props.Value}
     </div>
   )
 }
 
 export default Parent
 