import React, { useState } from "react"

const Child = React.memo(() => {
  console.log("Child Rendered")
  return <h2>Child Component</h2>
})

function Reactmemo() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Child />
    </div>
  )
}

export default Reactmemo