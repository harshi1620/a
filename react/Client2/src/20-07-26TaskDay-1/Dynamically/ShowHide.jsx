import React, { useState } from "react"

function ShowHide() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Component
      </button>

      {show && <h2>Hello! This component is now visible.</h2>}
    </div>
  )
}

export default ShowHide