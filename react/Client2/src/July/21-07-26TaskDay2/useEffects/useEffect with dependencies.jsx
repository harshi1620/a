import { useState, useEffect } from "react"

function Count() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Count changed:", count)
  }, [count])

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  )
}

export default Count