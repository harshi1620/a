import React, { useState } from "react"

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})

  // Handle all input fields
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  // Validate form
  const handleSubmit = (e) => {
    e.preventDefault()

    let newErrors = {}

    if (form.name === "") newErrors.name = "Name is required"
    if (form.email === "") newErrors.email = "Email is required"
    if (form.password === "")
      newErrors.password = "Password is required"

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration Successful!")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.name}</p>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.email}</p>

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.password}</p>

      <button type="submit">Register</button>
    </form>
  )
}

export default RegistrationForm