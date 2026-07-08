import React from "react"
import Child from "./Child"

function Parent() {
  const name = "Harshi"             // String
  const age = 21;                    // Number
  const subjects = ["Math", "Science", "English"] // Array
  const student = {                  // Object
    id: 101,
    city: "New York"
  }

  return (
    <Child
      name={name}
      age={age}
      subjects={subjects}
      student={student}
    />
  )
}

export default Parent