import React, { useState } from "react";

function DynamicForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Name is required");
    } else {
      setError("");
      alert("Form Submitted");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label><br />

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError(""); // Remove error while typing
        }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm