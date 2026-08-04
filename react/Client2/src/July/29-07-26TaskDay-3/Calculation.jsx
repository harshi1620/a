import React, { useState, useMemo } from "react"

function Calculation() {
  const [number, setNumber] = useState(2)

  const square = useMemo(() => {
    console.log("Calculating...")
    return number * number;
  }, [number])

  return (
    <div>
      <h2>Square: {square}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Increase
      </button>
    </div>
  )
}

export default Calculation