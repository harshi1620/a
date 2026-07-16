import { useContext } from "react"
import { CounterContext } from "./SharedState"

function Home() {
  const { count, setCount } = useContext(CounterContext)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Home