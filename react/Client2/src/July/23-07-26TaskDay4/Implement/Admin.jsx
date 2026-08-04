import React from "react"
import withAuthorization from "./withAuthorization"

function Admin() {
  return <h2>Welcome to Admin Dashboard</h2>
}

export default withAuthorization(Admin)