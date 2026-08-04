import React from "react"
import useCounter from "./useCounter"

function A() {
  const { count, increment } = useCounter()

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default A