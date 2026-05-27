 import React, { useState } from 'react'
// import B from './B'
import C from './C'
 import B from '../../localState/useState/B' 
 function A() {
  let [a,seta]=useState(10)
     return (
     <div>
        A
        <B/>
        {/* <B value={a}/> */}
        {/* <C value={a}/> */}
       
     </div>
   )
 }
 
 export default A
 