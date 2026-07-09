import React, { useState } from 'react'

function EventBasedUpdates() {
    let [count,setCount] = useState(0)
  return (
    <div style={{padding:'10px'}}>
        <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>&nbsp;&nbsp;
      <button onClick={()=>setCount(count-1)}>Decrement</button>&nbsp;&nbsp;
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default EventBasedUpdates
