import React, { useState } from "react"

function EventLoginForm() {
  const [username, setUsername] = useState("")
  const [message, setMessage] = useState("")

  // Click Event
  const handleClick = () => {
    setMessage("Login button was clicked.")
  }

  // Change Event
  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  // Submit Event
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${username}!`)
  }

  // Focus Event
  const handleFocus = () => {
    setMessage("Start typing your username.")
  }

  // Blur Event
  const handleBlur = () => {
    if (username === "") {
      setMessage("Username cannot be empty.")
    } else {
      setMessage("Username looks good!")
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <br />

        <input
          type="text"
          value={username}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Enter username"
        />

        <br /><br />

        <button type="submit" onClick={handleClick}>
          Login
        </button>
      </form>

      <h4>Username: {username}</h4>
      <p>{message}</p>
    </div>
  )
}

export default EventLoginForm