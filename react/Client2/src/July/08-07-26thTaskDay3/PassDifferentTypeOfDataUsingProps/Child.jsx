import React from "react"

function Child({ name, age, subjects, student }) {
  return (
    <div>
      <h2>Child Component</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>

      <p><strong>Subjects:</strong></p>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      <p><strong>Student ID:</strong> {student.id}</p>
      <p><strong>City:</strong> {student.city}</p>
    </div>
  )
}

export default Child;