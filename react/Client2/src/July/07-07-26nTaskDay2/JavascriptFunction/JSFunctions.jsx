import React from 'react'

function JSFunctions() {
    let handleClick =()=>{
        console.log('Button clicked')
    }
  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default JSFunctions
