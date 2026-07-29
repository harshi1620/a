import React, { useState, useCallback } from "react"

function Child({ greet }) {
  console.log("Child Rendered")
  return <button onClick={greet}>Greet</button>
}

function UseuseCallback() {
  const [count, setCount] = useState(0)

  const greet = useCallback(() => {
    alert("Hello!")
  }, [])

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child greet={greet} />
    </div>
  )
}

export default UseuseCallback