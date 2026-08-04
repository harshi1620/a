import { useState } from "react"

function Counter1() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Counter1