 import React, { useContext, useState } from 'react'
 import {context} from './A'


 
 
 function I() {
  // console.log(context)
   let {a,seta}=useContext(context)
   console.log(a)
   
   return (
     <div> I
        {/* <h3> This is the value in I{value} </h3> */}
        <h3>This is the value from A {a}</h3>
        <button onClick={()=>seta(a+1)}>click</button>
       
     </div>
   )
 }
 
 export default I

 