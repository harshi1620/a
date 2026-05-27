
import React, { useState } from 'react'

function B() {
    let[A,hello]=useState(
        {
            name:"harshi",
            city:"vija"
        }
    )
    console.log(A)
    let set=()=>{
        hello({
           ... A,
            city:"hyd"
        })

    }
  return (
    <div> B 
        <h3>{A.name}</h3>        
        <h1>{A.city}</h1>
        <button onClick={ set}>click</button>
      
    </div>
  )
}

export default B
