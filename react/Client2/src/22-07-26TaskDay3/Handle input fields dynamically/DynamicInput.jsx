import React, { useState } from "react";

function DynamicInput() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h2>Dynamic Form Example</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleChange}
      />

      <h3>Entered Data:</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
    </div>
  );
}

export default DynamicInput;