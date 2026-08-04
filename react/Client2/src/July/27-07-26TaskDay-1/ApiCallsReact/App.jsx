import React, { useEffect, useState } from "react"
import { getUsers } from "./GetUsers"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getUsers()
      setUsers(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App