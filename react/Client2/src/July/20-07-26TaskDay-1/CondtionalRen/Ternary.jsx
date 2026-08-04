import React from "react"

function Ternary() {
  const isLoggedIn = false

  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
    </div>
  )
}

export default Ternary