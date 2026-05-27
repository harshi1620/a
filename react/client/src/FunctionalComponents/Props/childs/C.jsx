 import React, { useState } from 'react'
 
 function C({value}) {
  console.log(value)
   let [A,setA]=useState(10)
   return (
     <div>
       <h3> This is a C component {value}</h3>
     </div>
   )
 }
 
 export default C
 
 