import React from "react"

function AuthHOC(Home) {
  return function AuthComponent(props) {
    const isLoggedIn = true
    if (!isLoggedIn) {
      return <h2>Please Login</h2>
    }

    return <Home {...props} />
  }
}

export default AuthHOC