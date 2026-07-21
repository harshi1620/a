import { useEffect } from "react"

function EmptyDependency() {
  useEffect(() => {
    console.log("Component mounted")
  }, [])

  return <h1>Hello React</h1>
}

export default EmptyDependency