import React from "react"
import Child from "./Child"

function Parent() {
  const name = "Sam"
  const age = 20
  const city = "Hyderabad"

  return (
    <Child
      name={name}
      age={age}
      city={city}
    />
  )
}

export default Parent