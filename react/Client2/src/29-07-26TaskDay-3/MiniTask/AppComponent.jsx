import React, { useState, useMemo, useCallback } from "react"
import Child from "./Child"

function AppComponent() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  // useMemo Example
  const square = useMemo(() => {
    console.log("Calculating Square...")
    return count * count;
  }, [count]);

  // useCallback Example
  const greet = useCallback(() => {
    alert("Hello! from child component using useCallback")
  }, [])

  let handleChange = (e)=>{
    setText(e.target.value)
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimization</h2>

      <h3>Count: {count}</h3>
      <h3>Square: {square}</h3>
      <h3>Text: {text}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={handleChange}
      />

      <br /><br />

      <Child greet={greet} />
    </div>
  )
}

export default AppComponent