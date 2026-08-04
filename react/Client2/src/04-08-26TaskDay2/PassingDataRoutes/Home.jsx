import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <Link
        to="/profile"
        state={{ name: "myName", age: 22 }}
      >
        View Profile
      </Link>
    </div>
  )
}

export default Home