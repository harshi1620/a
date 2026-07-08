import React from "react"

function Child({ sendData }) {
  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={() => sendData("Hello Parent!")}>
        Send Data
      </button>
    </div>
  )
}

export default Child;