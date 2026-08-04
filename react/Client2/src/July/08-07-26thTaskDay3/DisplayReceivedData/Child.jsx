import React from "react"

function Child({ name, age, city }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  )
}

export default Child