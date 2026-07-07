import React from 'react'

function Daughter({props}) {
    console.log(props)
  return (
    <div>
      <h3>{props}</h3>
    </div>
  )
}

export default Daughter
