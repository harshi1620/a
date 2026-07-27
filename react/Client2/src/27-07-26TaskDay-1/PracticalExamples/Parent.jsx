import React, { useState } from "react"
import Child from "./Child"
function Parent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child name="John" />
    </div>
  )
}

export default Parent