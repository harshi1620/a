 import React, { useState } from 'react'
import Child from './C'
 
 function B(value) {
    console.log(value)
   let [A,seta]= useState(10)
   return (
     <div>
       <h3>This is a B component {value}</h3>
       <C/>
     </div>
   )
 }
 
 export default B
 