import React from "react"

function Child1({ sendMessage }) {
  return (
    <div>
      <h3>Child 1</h3>

      <button onClick={() => sendMessage("Hello from Child 1!")}>
        Send Message
      </button>
    </div>
  )
}

export default Child1;