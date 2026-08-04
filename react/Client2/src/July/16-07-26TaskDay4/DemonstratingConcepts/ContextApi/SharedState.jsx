import { createContext, useState } from "react"
import Home from "./Home"

export let CounterContext = createContext()
function SharedState() {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <Home />
    </CounterContext.Provider>
  )
}

export default SharedState