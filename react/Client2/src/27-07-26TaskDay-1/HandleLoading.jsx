import { useEffect, useState } from "react"

function HandleLoading() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        )

        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }

        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getUsers()
  }, [])

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error: {error}</h2>

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default HandleLoading