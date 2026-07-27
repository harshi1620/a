import { useEffect, useState } from "react"
import UserCard from "./UserCard"

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Users