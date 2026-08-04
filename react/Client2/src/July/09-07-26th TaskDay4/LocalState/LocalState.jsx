import React, { useState } from 'react'

function LocalState() {
    //useState is react hook
    //hook are pre-defined functions in react.
    let [name,setName] = useState('Harshitha')
    console.log(name)
    
  return (
    <div>
      <h1>Created Local state in react component </h1>
      <h2>{name}</h2>
    </div>
  )
}

export default LocalState
