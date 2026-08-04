import React, { useEffect, useState } from "react"
import withLoading from "./withLoading"

function Users() {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Tom" },
        { id: 2, name: "Jerry" },
        { id: 3, name: "Bob" },
      ]);

      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      <h2>User List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default withLoading(Users)