import { useEffect } from "react"

function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Running...")
    }, 1000)

    return () => {
      clearInterval(id)
      console.log("Timer cleared")
    }
  }, [])

  return <h2>Timer</h2>
}

export default Timer