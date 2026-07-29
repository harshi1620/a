import React, { useState, useCallback } from "react"

function Recreation() {
  const [count, setCount] = useState(0)

  const showMessage = useCallback(() => {
    alert("Hello!")
  }, [])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <button onClick={showMessage}>
        Show Message
      </button>
    </div>
  )
}

export default Recreation