import React, { useState } from "react";

function FormExample() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    country: "",
    gender: "",
    hobbies: [],
    file: null,
  })

  // Handle text, textarea, dropdown, radio
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle checkboxes
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        hobbies: [...formData.hobbies, value],
      })
    } else {
      setFormData({
        ...formData,
        hobbies: formData.hobbies.filter(
          (hobby) => hobby !== value
        ),
      })
    }
  }

  // Handle file input
  const handleFile = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  return (
    <div>
      <h2>React Form Example</h2>

      {/* Text Field */}
      <label>Name:</label><br />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br /><br />

      {/* Text Area */}
      <label>Message:</label><br />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <br /><br />

      {/* Dropdown */}
      <label>Country:</label><br />
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
      <br /><br />

      {/* Radio Buttons */}
      <label>Gender:</label><br />
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={handleChange}
      /> Male

      <input
        type="radio"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={handleChange}
      /> Female
      <br /><br />

      {/* Checkboxes */}
      <label>Hobbies:</label><br />
      <input
        type="checkbox"
        value="Reading"
        onChange={handleCheckbox}
      /> Reading

      <input
        type="checkbox"
        value="Sports"
        onChange={handleCheckbox}
      /> Sports

      <input
        type="checkbox"
        value="Music"
        onChange={handleCheckbox}
      /> Music
      <br /><br />

      {/* File Input */}
      <label>Upload File:</label><br />
      <input
        type="file"
        onChange={handleFile}
      />
      <br /><br />

      <h3>Form Data</h3>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Message:</strong> {formData.message}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Hobbies:</strong> {formData.hobbies.join(", ")}</p>
      <p>
        <strong>Selected File:</strong>{" "}
        {formData.file ? formData.file.name : "No file selected"}
      </p>
    </div>
  )
}

export default FormExample