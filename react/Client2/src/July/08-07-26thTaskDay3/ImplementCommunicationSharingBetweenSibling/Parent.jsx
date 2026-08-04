import React, { useState } from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"

function Parent() {
  const [message, setMessage] = useState("")

  // Receives data from Child1
  const receiveMessage = (data) => {
    setMessage(data)
  }

  return (
    <div>
      <h2>Parent Component</h2>

      <Child1 sendMessage={receiveMessage} />
      <Child2 message={message} />
    </div>
  );
}

export default Parent;