import React, { useState, useEffect } from "react"

function LoadingState() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {loading ? <h2>Loading...</h2> : <h2>Data Loaded Successfully!</h2>}
    </div>
  )
}

export default LoadingState