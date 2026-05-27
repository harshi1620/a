import React, { useState } from 'react'
import I from './I'

function H({value}) {
console.log(value)
  return (
    <div>
        H
      <I value ={value}/>
      
      <h3>This is a value in H from D{value}</h3>
    </div>
  )
}

export default H
