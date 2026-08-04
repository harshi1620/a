import React from "react"
import Child2 from "./Child2"

function Parent2() {
  const student = {
    name: "Harshi",
    age: 20,
    course: "Computer Science"
  }

  return (
    <div>
      <h2>Parent 2</h2>
      <Child2 student={student} />
    </div>
  )
}

export default Parent2;