import { useContext } from "react"
import { AuthContext } from "./AuthProvider"

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  return (
    <div>
      <h2>
        {isLoggedIn ? "Welcome, User!" : "Please Login"}
      </h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default Login