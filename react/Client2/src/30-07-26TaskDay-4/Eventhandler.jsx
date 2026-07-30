import React from "react"

function Eventhandler() {
  const handleClick = (name, event) => {
    console.log(event)
    alert(`Hello, ${name}`)
  }

  return (
    <button onClick={(event) => handleClick("Sam", event)}>
      Click Me
    </button>
  )
}

export default Eventhandler