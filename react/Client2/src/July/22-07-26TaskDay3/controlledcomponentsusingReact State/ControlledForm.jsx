import React, { useState } from "react"

function ControlledForm() {
  const [name, setName] = useState("")

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <h2>Controlled Component Example</h2>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <p>You entered: {name}</p>
    </div>
  )
}

export default ControlledForm