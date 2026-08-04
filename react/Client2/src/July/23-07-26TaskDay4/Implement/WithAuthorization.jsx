import React from "react"

function withAuthorization(Admin) {
  return function AuthorizationComponent(props) {
    const role = "Admin"

    if (role !== "Admin") {
      return <h2>Access Denied</h2>
    }

    return <Admin {...props} />
  }
}

export default withAuthorization