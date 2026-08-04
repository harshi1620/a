import React from 'react'

function ChildA({setFn}) {
  return (
    <div>
      <button onClick={()=>setFn('Hi')}>Change</button>
    </div>
  )
}

export default ChildA
