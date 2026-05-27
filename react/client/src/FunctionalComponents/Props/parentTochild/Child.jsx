 import React, { useState } from 'react'
 import Parent from './Parent'
 
 function Child() {
  let a = 12
   let [A,B]=useState(1000)
   
    function Increase(a){
      a++
      console.log(a)
    }
    let inc =()=>{
        //  console.log("Increase Function called")
        B(A+1)
    }
  //  return (
  //    <div>
  //      <Parent Value={A}/>
  //      <button onClick={()=>{Increase(a)}}>Increase</button><br />
  //      <button onClick={inc}>Click in parent</button><br />
       
  //    </div>  
  //  )
 }
 export default Child