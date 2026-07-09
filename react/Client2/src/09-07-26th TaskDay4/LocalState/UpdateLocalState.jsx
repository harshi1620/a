import React, { useState } from 'react'

function UpdateLocalState() {
    //useState is react hook
    //hook are pre-defined functions in react.
    let [name,setName] = useState('Harshitha')
    console.log(name)
    
  return (
    <div>
      <h1>Update Local state in react component </h1>
      <h2>{name}</h2>
      <button onClick={()=>setName('Gajjala Harshitha')}>ChangeName</button>
    </div>
  )
}

export default UpdateLocalState
