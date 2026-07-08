import React, { useState } from "react"
import Child from "./Child"

function Parent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Parent Component</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child count={count} />
    </div>
  )
}

export default Parent