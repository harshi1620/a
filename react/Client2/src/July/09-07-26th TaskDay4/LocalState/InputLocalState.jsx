import React, { useState } from 'react'

function InputLocalState() {
    let [name,setName] = useState('')
    
  return (
    <div>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
      <h2>Hello, {name}</h2>
    </div>
  )
}

export default InputLocalState
