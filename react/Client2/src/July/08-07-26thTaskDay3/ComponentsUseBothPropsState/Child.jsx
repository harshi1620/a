import React from "react"

function Child({ count }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Count received from Parent: {count}</p>
    </div>
  )
}

export default Child;