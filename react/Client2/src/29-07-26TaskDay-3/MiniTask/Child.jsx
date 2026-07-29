import React from "react"

const Child = React.memo(({ greet }) => {
  console.log("Child Rendered")

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={greet}>Greet</button>
    </div>
  )
})

export default Child