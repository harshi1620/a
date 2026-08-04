import { useState, useEffect } from "react"

function WithoutDependency() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Component rendered")
  })

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default WithoutDependency