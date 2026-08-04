import React from 'react'

function ChildB({msg}) {
  return (
    <div>
      <h2>Data from sibling component -- {msg}</h2>
    </div>
  )
}

export default ChildB
