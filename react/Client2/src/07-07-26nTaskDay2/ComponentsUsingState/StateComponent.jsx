import React, { useState } from 'react'

function StateComponent() {
    let [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Click</button><br />
      {count}
    </div>
  )
}

export default StateComponent
