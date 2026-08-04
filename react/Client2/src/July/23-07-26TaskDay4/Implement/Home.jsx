import React from "react"
import AuthHOC from "./AuthHOC"

function Home() {
  return <h1>Welcome to Home Page</h1>
}

export default AuthHOC(Home)