 import React, { useContext } from 'react'
import G from './G'
import H from './H'
// import { context } from './A'
import { context } from './A'
 
 function D() {
  let{a,seta}=useContext(context)
   return (
     <div>
        D
        <button onClick={() =>{seta(a+1)}}>click</button>
        <h3>{a}</h3>
       <G/>
       <H/>
     </div>
   )
 }
 
 export default D
 