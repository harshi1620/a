import React from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"
import Child3 from "./child3"

function Parent() {
  return (
    <div> 
      <h2>Parent Component</h2>

      <Child1 />
      <Child2 />
      <Child3 />
    </div>
  )
}

export default Parent