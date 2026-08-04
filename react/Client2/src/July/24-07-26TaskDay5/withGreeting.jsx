import React, { useState, useEffect } from "react"

// Higher Order Component
const withGreeting = (WrappedComponent) => {
  return function EnhancedComponent() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Hello from HOC!</h2>
        <WrappedComponent />
      </div>
    )
  }
}

function MainComponent() {
  // Conditional Rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Dynamic Form Handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  // API Integration
  const [users, setUsers] = useState([])

  // useEffect Hook
  useEffect(() => {
    document.title = isLoggedIn
      ? "Welcome User"
      : "Please Login"

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
  }, [isLoggedIn])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const fruits = ["Apple", "Mango", "Orange", "Banana"]

  return (
    <div>
      <h1>React Concepts Demo</h1>

      {/* Conditional Rendering */}
      <h2>1. Conditional Rendering</h2>
      {isLoggedIn ? (
        <p>Welcome User </p>
      ) : (
        <p>Please Login </p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>

      <hr />

      {/* Dynamic Form Handling */}
      <h2>2. Dynamic Form Handling</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <h4>Name: {formData.name}</h4>
      <h4>Email: {formData.email}</h4>

      <hr />

      
      <h2>3. map() Method</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <hr />

      <h2>4. API Integration</h2>

      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid gray",
              margin: "5px",
              padding: "10px",
            }}
          >
            <p>
              <strong>{user.name}</strong>
            </p>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  )
}

export default withGreeting(MainComponent)                    