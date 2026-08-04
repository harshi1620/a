import React, { useState } from 'react'

function UpdateUIState() {
    let [message, setMessage] = useState('Good morning')
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={()=>setMessage('Good afternon')}>change wish</button>
    </div>
  )
}

export default UpdateUIState
