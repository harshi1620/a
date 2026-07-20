import React from "react"

function LogicalOp() {
  const isAdmin = true

  return (
    <div>
      <h1>Dashboard</h1>
      {isAdmin && <button>Delete User</button>}
    </div>
  )
}

export default LogicalOp