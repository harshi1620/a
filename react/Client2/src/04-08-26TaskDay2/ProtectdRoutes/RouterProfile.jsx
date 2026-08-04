import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"
import Home from "./Home"
import Dashboard from "./Dashboard"
import ProtectedRoute from "./ProtectedRoute"

function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <div>
        <h1>Protected Route Example</h1>

        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>

        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>

        <br /><br />

        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Router