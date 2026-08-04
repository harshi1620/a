import React from "react"

function Child2({ student }) {
  return (
    <div>
      <h3>Child 2</h3>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
    </div>
  )
}

export default Child2