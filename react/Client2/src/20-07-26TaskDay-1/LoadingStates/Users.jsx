import React, { useState, useEffect } from "react"

function Users() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setUsers(["Harshi", "Bob", "Sam"])
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (users.length === 0) {
    return <h2>No Users Available</h2>
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users