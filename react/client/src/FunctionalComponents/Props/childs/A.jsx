 import React from 'react'
 import B from './B'
 import C from './C'
 
 function A() {
   let[A,setA]= useState(10)
   return (
     <div>
       <B value={A}/>
       {/* <C value={A}/> */}
     </div>
   )
 }
 
 export default A
 