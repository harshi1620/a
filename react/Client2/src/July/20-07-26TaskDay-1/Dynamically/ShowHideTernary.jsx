import React, { useState } from "react"

function ShowHideTernary() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <br /> <button onClick={() => setShow(!show)}>
        Toggle Component
      </button>

      {show ? (
        <h2>Component is Visible</h2>
      ) : (
        <h2>Component is Hidden</h2>
      )}
    </div>
  )
}

export default ShowHideTernary